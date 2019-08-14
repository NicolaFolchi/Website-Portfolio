var dt, h, counter = 0; //dt and h are utilized to save the very first time the user clicked the button, so later on as the user clicks the button it wont modify its data
var counter2 = 0;

function myFunction(){ 
    var bt = document.getElementById("my_b"); //main button
    var p = document.getElementById("temp_p");
    // date and hutes collected as the user clicks the main button on the first page
    var dt_temp = new Date(); 
    var h_temp = dt_temp.getHours();
    if (bt.onclick) {
        if (counter != 1){ // storing when the first click on button happened
            dt = dt_temp;
            h = h_temp;
            counter = 1;
        }
        if (h_temp >= (h + 1)) { 
            // Updating data section.
            // Here it's where a DB will be linked with a for loop, iterating through the DB entries and displaying each one of them as time goes by.
            // dataBaseFetch();
            // p.replaceWith("IT'S UPDATING!!"); 

                    //for when it works:
            //hour = hour_temp;
            if (counter2 == 0){
                $("#temp_p").text("Si viste esto entonces estaria muuuuuuy felizzzz. En este momento de seguro que si estoy en el aire asi que bueno. Alla debe ser mas de media noche y tal vez tu ya pronto dormiras, entonces quiero desearte unas muy buenas noches, yo espero que tu duermas muy pero muy bien y que sueñes algo muy lindo. \n\n\nQueria decirte que te extraño, que te he extrañado y que durante estos dias me has hecho mucha falta. Perdon, te pido disculpas por el tiempo que perdimos por mi culpa. No quiero que mi segundo mensaje hacia ti sea triste. Asi que quiero que sepas que yo te quiero tanto, que eres la niña mas dulce y bella, y que estoy loco por verte...");
                counter2++;
                h = h_temp;
            }
            else if (counter2 == 1){
                $("#temp_p").text("Hey youuu, you are back heree :) bueno yo en realidad supongo que tu dormiras en algun momento si no es que ya lo hiciste jajakaka. Hey ojala y esto de verdad sirva y todo esto que estoy escribiendo no es en vano. \n\n\nAnywayyy, I don't know about you, but I really hope we can see each other tomorrow, or well, today?? Whenever you'll be reading this hahaha. I will dream about you and think about you. Maybe I am doing it right now as you read this :)");
                counter2++;
                h = h_temp;
            }
            else if (counter2 == 2){ //gotta be the last message
                $("#temp_p").text("Hola niñitaaaa, bueno Dani linda ya yo debo de estar pronto a llegar, asi que pronto podras comunicarte conmigo en una forma mas interactiva que esta. Si leiste todo esto quiero decirte que estoy muy feliz que lo hayas hecho y que de verdad espero que te haya gustado. Lo he estado haciendo con mucho amor y cariño y seguire trabajando para hacerlo mejor. Por ahora quiero decirte que no me aguanto por verte y darte un abrazo, siempre y cuando me lo permitas. Por ahora te envio un abrazo, te quiero mucho Dani.\n PS: I hope you liked the orange and yellow colors. I will make it look waaay prettier as time goes by <3 <3 <3");
                counter2++;
                h = h_temp;
            }
            else if (counter2 == 3){
                $("#temp_p").text("3");
                counter2++;
                h = h_temp;
            }
        }
    }
    if (p.style.display === "none"){
        $("#temp_p").css("display", "block");
    }
    else {
        $("#temp_p").css("display", "none"); 
    }
};

// function dataBaseFetch() {
//     $.ajax({
//         url:     "mydb.db",
//         type:    "GET",
//         data:    {ID: 2},
//         success: function(data) {
//             /* ...use the data to fill in some HTML elements... */
//             var p = document.getElementById("temp_p");
//             alert("SUCCESS");
//             p.replaceWith(data);
//         },
//         error:   function() {
//             /* ...show an error... */
//             var p = document.getElementById("temp_p");
//             p.replaceWith = ('I was not able to fetch data from database :(') ;
//             alert("fail");
//         }
//     });
// }