alert('Soy una ventana emergente!')
            console.log('Hola soy un mensaje en la consola');
            /*Variables*/
            var nombre_variable;
            let otra_variable = "Hola";
            const PI = 3.1416;
            let num2=18;
            let hayClases= false;
            let terminoLaClase = false;
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

            if(nombre_variable == undefined){
                elemento.innerHTML +="Estamos con una variable sin valor definido!"
                elemento.innerHTML +="<p>Luis Navas</p><p>Barbara</p><p>Damián</p>"
                
                elemento.innerHTML +="<p>Debora</p><p>Camila</p>"
                elemento.style.backgroundColor="Blue"
                elemento.style.color="white"
                

            }