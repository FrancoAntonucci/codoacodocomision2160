
/*alert('Soy una ventana emergente!')
            console.log('Hola soy un mensaje en la consola');
            /*Variables*/
            /*palabra reservada, nombre de la variable */
           var nombre_variable;
            /* palabra reservada, nombre de la variable = asignamos el valor*/
           let otra_variable = "Hola";/*tipo string*/
            const PI = 3.1416; /*tipo entero y float*/
           let num2=18;/*tipo entero*/
          let hayClases= false;/*booleano*/
           let terminoLaClase = false;/*booleano*/
            /*tipos undefined, numeros, string, booleanos, objetos, array, chart, funcion */
            console.log(PI*num2);
            console.log(num2+16);
            console.log(num2+16 + " " + otra_variable);
            /*condicionales*/
            if(hayClases == true && terminoLaClase != true){
                console.log("nos conectamos a codoACodo2160")
            }else{
                console.log("Salimos a celebrar el día del estudiante")
            }
            if(hayClases == false || terminoLaClase == true){
                console.log("Salimos a celebrar el día del estudiante")
            }
            let elemento = document.getElementById("principal");
            /*console.log(elemento);*/
            elemento.innerHTML="Mi valor para innerHTML";
            elemento.innerHTML+="<p>"+otra_variable+"<p>";
            document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>")
            document.write("<h3>¿Como están?</h3>")

         /* if(nombre_variable == undefined){
                elemento.innerHTML +="Estamos con una variable sin valor definido!"
                elemento.innerHTML +="<p>Luis Navas</p><p>Barbara</p><p>Damián</p>"
                
                elemento.innerHTML +="<p>Debora</p><p>Camila</p>"
               /* elemento.style.backgroundColor="Blue"
                elemento.style.color="white"
            }*/
            
           /* let mensaje = prompt("Introduce tu mensaje: ")
            elemento.innerHTML+= "<h3>" + mensaje + "</h3>";
            elemento.innerHTML+= "<div class=\"alert alert-success\" role=\"alert\">"+mensaje+"</div>";
            */
         /*  let menu = prompt("selecciona el pedido:  \n 1. Milanesa con fritas \n 2. Milanesa Napolitana \ 3. Fritas solas");

           if(menu === '1'){ /*con === es estrictamente igual en valor y tipo por esto el 1 debe ir entre comillas para que sea string
            elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu milanesa con fritas</div>";
           }
           else if(menu === '2'){
            elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu milanesa napolitana</div>";
           }
           else if(menu === '3'){
            elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu Papas fritas</div>";
           }else{
               alert("Debes ingresar una opcion válida");
               let menu = prompt("selecciona el pedido:  \n 1. Milanesa con fritas \n 2. Milanesa Napolitana \ 3. Fritas solas");
           }

           switch (menu) {
               case '1':
                    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Disfruta de tu milanesa con fritas</div>";
                   break;
                                
               default:
                elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">Debes elegir una opción válida</div>";
                   break;
           }*/
          
          /* let num = parseInt(prompt("ingresa el primer numero"));/*parseFloat si quiero los decimales*/
          /* let num3 = parseInt(prompt("ingresa el segundo numero"));

           let resultado ="El resultado de la suma de "+ num+" y " + num3 +'es: '+ (num+num3);
            /* otra forma*/

          /*  let num = 0, num3=0;
            num = Number(prompt("ingresa el primer numero"));
            num3 = Number(prompt("ingresa el primer numero"));

            let resultado ="El resultado de la suma de "+ num+" y " + num3 +'es: '+ (num+num3);*/

            // ARREGLOS (STRINGS) palabra reservada nombreArreglo  = [index0, index1, ...nindex];
            //SI QUIERO LOS NOMBRES UNO EN CADA CARD
            //para que aprezcan cada uno en una card uso for para recorrerlo
                 //pulsando 2 veces }} aparecen las comillas francesas y entre ellas meto el div etc. ademas cuando usamos estas comillas la variable la llamamos ${alumnos[a]} no se usa el ++

            let alumnos = ["Natalia", "Nicolás","Ramiro","Soledad"];
            for (let a = 0; a < alumnos.length; a++) { 
               elemento.innerHTML+=` 
                <div class="card" style="width: 18rem;">
                         <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${alumnos[a]}</h5> 
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;  
            }
            // de esta forma funciona igual que con la de arriba pero es mas simple

            //para agregar nombres se puede hacer de varias formas: a saber,

            alumnos.push('Barbara');
            alumnos[5]="Luis";//si se la posicion , si no mejor con push
            alumnos.forEach((a,index)=>{
                elemento.innerHTML+=`
                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${index +1} ${a}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
             </div>
            `; 
            }); 