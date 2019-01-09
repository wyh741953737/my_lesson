Page({
  scanCode: function () {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        wx.cloud.callFunction({
          name: 'bookinfo',
          data: {
            isbn: res.result
          },
          success: res => {
              const bookString=res.result;
              console.log(bookString);
              const db=wx.cloud.database();
              const book=db.collection('mybook');
              db.collection('mybook').add({
                data:JSON.parse(bookString)
              }).then(res=>{
                // console.log(res)
                console.log(res);
              }).catch(err=>{
                console.log(err);
              })
              }
            })
            // wx.showToast({
            //   title: JSON.stringify(res.data)
            // })
            console.log(res)
          }
    })
  
  
  }
})
