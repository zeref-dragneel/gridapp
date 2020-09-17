const data = [
    { url: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png', key:1,text:'hello1'},
    { url: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png',key:2 ,text:'hello2'},
    { url: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png',key:4,text:'hello3'},
    { url: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png',key:5,text:'hello4'},
    { url: 'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png',key:6,text:'hello5'},
]
const serverURI = 'https://jsonplaceholder.typicode.com/todos/1';
const dataFetch = fetch(serverURI).then(response => response.json())

export  {data,dataFetch};