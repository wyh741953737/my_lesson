import * as PropTypes from 'prop-types';
import * as React from 'react';
import './progress.css';

// 类型校验
export interface IProgressProps {
    color?: string,
    prefixCls?: string,
    showInfo?: boolean,
    step?: number,
    total?: number
}

const percentDel = (step: number | undefined,total: number | undefined): number => {
    if(!step || !total){
        return 0;
    }
    return (step/total) *100;
}
const parseIntPercent = (text:number) :string => `${Math.ceil(text)}%`;
const validProgress = (progress: number | undefined) :number=> {
    if(!progress || progress<0){
        return 0;
    }else if(progress >100){
        return 100
    }
    return progress
}
class ProgressBar extends React.Component<IProgressProps>{
    // 如果外界不传，则使用默认值 类的static
    public static defaultProps = {
        color: '#EFF103',
        prefixCls: 'tiger-progress',
        showInfo: false,
        step: 2,
        total: 10
    }
    public static propTypes = {
        color: PropTypes.string,
        showInfo: PropTypes.bool,
        step: PropTypes.number,
        total: PropTypes.number
    }
    public render() {
        const { prefixCls, step, total, showInfo, color, ...resetProps } = this.props;
        const fixOuterStyle = {
            marginTop:"30px"
        }
        let text;
        let percent;
        percent = percentDel(step,total);
        text = parseIntPercent(validProgress(percent));
        const percentStyle = {
            background:color,
            borderRadius:"100px",
            height:"12px",
            width:text
        }
        let progressInfo;
        if(showInfo){
            progressInfo = (
                <div className={`${prefixCls}-show-info`}>
                    <span className={`${prefixCls}-text`}>
                        {text}
                    </span>
                </div>
            )
        }
        let progress;
        progress = (
            <div>
                <div className={`${prefixCls}-outer`} style={fixOuterStyle}>
                    <div className={`${prefixCls}-inner`}>
                        <div className={`${prefixCls}-bg`} style={percentStyle}>
                            {progressInfo || null}
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div {...resetProps} className="tiger-progress">
                {progress}
            </div>
        )
    }
}

export default ProgressBar;
