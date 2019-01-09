


function* listPeople(){
let i=0;
yield i;
i++;
yield i;
i++;
yield i;
}
while (!people.next().done)
{
  console.log(people.next())
}
const people=listPeople;