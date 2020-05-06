export let changeTime = function (value) {
  value = value.toString();
  let list = [];
  let str = "";
  list = value.split(' ');
  switch (list[1]) {
    case 'Jan': str = '01'; break;
    case 'Feb': str = '02'; break;
    case 'Mar': str = '03'; break;
    case 'Apr': str = '04'; break;
    case 'May': str = '05'; break;
    case 'Jun': str = '06'; break;
    case 'Jul': str = '07'; break;
    case 'Aug': str = '08'; break;
    case 'Sept': str = '09'; break;
    case 'Oct': str = '10'; break;
    case 'Nov': str = '11'; break;
    case 'Dec': str = '12'; break;
  }
  return `${list[3]}-${str}-${list[2]}`;
}

//blob导出excel表
export let BLOB = function (value,title) {
  const blob = new Blob([value], {
    type: "application/vnd.ms-excel"
  });
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = title;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  // 5.释放这个临时的对象url
  window.URL.revokeObjectURL(url);
}

//列表时间修改
export let listDateChange=function(value){
  value.forEach(item=>{
    let str=item.date;
    item.date=str.slice(0,10);
  })
  return value;
}

export let changeCustomerName=function(value){
  let list=[];
  value.forEach(item=>{
    list.push(item.name);
  })
  return list;
}