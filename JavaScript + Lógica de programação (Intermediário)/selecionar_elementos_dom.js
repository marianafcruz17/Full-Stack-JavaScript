function show(){
    //seleciona pelo id
    let element = document.selectElementById("name")
    console.log(element.value)

    //seleciona pelo nome
    let elements = document.selectElementByName("phone")
    console.log(elements[0].value)

    //seleciona por query
  /*  let elements = document.querySelectorAll("div#phones input[name='phone]")
    console.log(elements[0].value)*/
}