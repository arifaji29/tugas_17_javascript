function ubah(){
    var kata = "Saya beLajar bahaSa peMrograman deNgan khUsuk"
    console.log(kata.toLowerCase());
    console.log(kata.toUpperCase());
    console.log('============================');
}
ubah();

function ubah2(){
    var kata2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual"
    console.log(kata2.toLowerCase());
    console.log(kata2.toUpperCase());
    console.log('===============================');
}
ubah2();

function codeAT(){
    var kata3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    var kata4 = kata3.substr(0,6)
    var huruf1 = kata4.charCodeAt(0)
    var huruf2 = kata4.charCodeAt(1)
    var huruf3 = kata4.charCodeAt(2)
    var huruf4 = kata4.charCodeAt(3)
    var huruf5 = kata4.charCodeAt(4)
    var huruf6 = kata4.charCodeAt(5)
    
    console.log(huruf1,"-",huruf2,"-",huruf3,"-",huruf4,"-",huruf5,"-",huruf6);
    

}
codeAT();


