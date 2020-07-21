                         /*Name: Irfan shah */
                         
                         /* CHAPTER# 38-44 */

/* 1. Write a custom function power ( a, b ), to calculate the value of
/* a raised to b.*/




function raisedValue(){
    var a =prompt("enter first value");
    var b = prompt("enter second value");
    console.log(Math.pow(a, b))
    }
    raisedValue()
    
    

    /* 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.*/
    



    function leapYear() {
        let year = prompt("enter year");
        let answer;
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            answer = "leap year";
        } else {
            answer = "not a leap year";
        }
        console.log(answer);
    }
     
    leapYear();

    
    /* 3. If the lengths of the sides of a triangle are denoted by a, b, and
    /* c, then area of triangle is given by
    /* area = S(S − a)(S − b)(S − c)
    /* where, S = ( a + b + c ) / 2
    /* Calculate area of triangle using 2 functions*/
    


    function input(){
        var a = prompt("enter value of a ")
        var b = prompt("enter value of b")
        var c = prompt("enter value of c ")
    var s = (a+b+c) / 2;
    console.log(s)
    var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    console.log(area)
    }
   
    input();
  
    




    /* 4. Write a function that receives marks received by a student in 3
    /* subjects and returns the average and percentage of these
    /* marks. there should be 3 functions one is the mainFunction
    /* and other are for average and percentage. Call those functions
    /* from mainFunction and display result in mainFunction.*/

    var stud1 =parseInt(prompt("Enter first student marks"));
    var stud2 =parseInt(prompt("Enter second student marks"));
    var stud3 =parseInt(prompt("Enter third student marks"));
       var obtMarks = stud1+stud2+stud3;
    var total= 300;
    function Mainfunction(){
    
        console.log("student"+" "+stud1+" " +"student"+" "+ stud2+" " +"student"+" "+ stud3)
     console.log(obtMarks)
    }
    Mainfunction()
    
    function percentage(){
    
        var per= obtMarks*100/total;
    console.log (per)
    }
    percentage()
    
    function average(){
      
        var averageMarks = obtMarks / 3 ;
    console.log(averageMarks)
    }
   
    average()
    
    /* 5. You have learned the function indexOf. Code your own custom
    /* function that will perform the same functionality. You can code
    /* for single character as of now.*/
    
    function indexOf(){ 
    var str = "hello world,Live as if you were to die tomorrow";
    var n = str.indexOf("were");
     console.log(n)
    }
    
    indexOf()
    
    



    /* 6. Write a function to delete all vowels from a sentence. Assume
    /* that the sentence is not more than 25 characters long.*/
    
    function delVowel(){
        var strings = ["That which does not kill us makes us stronger.” "];
    
        strings = strings.map(function (string) {
            return string.replace(/[aeiou]/g, '');
        });
        
        console.log(strings);
    }
    
    
    delVowel()
    
    
    /* 7. Write a function with switch statement to count the number of
    /* occurrences of any two vowels in succession in a line of text.
    /* For example, in the sentence*/
    
    function findOccurrences() {
        var str = "Pleases read this application and give me gratuity";
        var count = 0;
        switch (str) {
            case 'a':
                count++;
            case 'A':
                count++
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
               console.log (1);
            default:
                console.log(0);
        }
    }
    

    findOccurrences();
    
    
    
    /* 8. The distance between two cities (in km.) is input through the
    /* keyboard. Write four functions to convert and print this
    /* distance in meters, feet, inches and centimeters.*/
    
    
    var dist=prompt("Enter distance between two cities(in km)");
    
    function meter(){
    
        var meter= dist*1000;
    console.log(meter)
    }
    meter()
    
    function feet(){
        var feet = dist*3280.84;
        console.log(feet)
    }
    feet()
    
    
    function inches(){
        var inch= dist*39370.1;
        console.log(inch)
    }
    inches()
    
    function centimeter(){
        var centimeter= dist*100000
    console.log(centimeter)
    }
    centimeter();
    
    
    /* . A cashier has currency notes of denominations 10, 50 and
    /* 100. If the amount to be withdrawn is input through the
    /* keyboard in hundreds, find the total number of currency notes
    /* of each denomination the cashier will have to give to the
    /* withdrawer.*/


    function currencyDenomination() {
        var cash = +prompt("Enter cash (in hundreds): ");
        var hundred = cash / 100;
        var fifty = cash / 50;
        var ten = cash / 10;
        console.log(hundred)
        console.log(fifty)
        console.log(ten)
    }
    currencyDenomination()
    
    
            /* CHAPTER# 43-48 */


    /* 1. Show an alert box on click on a link.*/
    
    function display(){
        alert("hello world")
    }
    display();




    /* 2. Display some Mobile images in browser. On click on an
    /* image Show the message in alert to user.*/
    
                /* kindly see answer in html section*/
    
    
    /* 3. Display 10 student records in table and each row should contain a delete
    /* button. If you click on a button to delete a record, entire row should be
    /* deleted. */


    function del(){
    var table = document.getElementById("tables");
    table.deleteRow(-1);
    }

    del()
    
    
    /* 4. Display an image in browser. Change the picture on mouseover and set the
    /* first picture on mouseout.*/
    
    
                          /* kindly see answer in html section*/

                          



    /* 5. Show a counter in browser. Counter should increase on click on increase
    /* button and decrease on click on decrease button. And show updated counter
    /* value in browser.*/
    
    var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }
    var o = 0;
    function decreaseClick(){
        document.getElementById('dec').value= --o;
    }
    
    
    
                                              
    
                                               /* CHAPTER# 49-52*/
                                                 



    /* 1. Create a signup form and display form data in your web
    /* page on submission.*/
    
 
 
    function  getValue(){
        var txt= document.getElementById("user_input").value
        var txt2= document.getElementById("pass").value
        var txt3 = document.getElementById("rep").value
        document.getElementById('display').innerHTML= txt+txt2+txt3
    
    }
    


    
    /* 2. Suppose in your webpage there is content area in which
    /* you have entered your item details, but user can only see
    /* some details on first look. When user clicks on “Read
    /* more” button, full detail of that particular item will be
    /* displayed. */
    
    
    function morePara() {
         var expParagraph = "Web Desk .July 21, 2020 HomeLatestPakistan One killed, multiple injured in Turbat blast Play Video .At least one person was killed and seven others were injured in a blast in Turbat Bazaar, said the police on Tuesday.According to the police, at least seven were injured when the blast took place in the bazaar, with two in a critical condition. The injured have been moved to a nearby hospital.The blast took place near a car after which the vehicle caught on fire, confirmed police. A motorcycle near the site of the blast also caught on fire.The windows of the nearby buildings were also shattered due to the intensity of the blast."
           document.getElementById("para").innerHTML = expParagraph;
         }
        
    
    
    /*      3. In previous assignment you have created a tabular data
    /* using javascript. Let’s modify that. Create a form which
    /* takes student’s details and show each student detail in
    /* table. Each row of table must contain a delete button and
    /* an edit button. On click on delete button entire row should
    /* be deleted. On click on edit button, a hidden form will
    /* appear with the values of that row.*/
 
    function edit_row(no)
    {
     document.getElementById("edit_button"+no).style.display="none";
     document.getElementById("save_button"+no).style.display="block";
        
     var name=document.getElementById("name_row"+no);
     var country=document.getElementById("country_row"+no);
     var age=document.getElementById("age_row"+no);
        
     var name_data=name.innerHTML;
     var country_data=country.innerHTML;
     var age_data=age.innerHTML;
        
     name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
     country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
     age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
    }
    
    function save_row(no)
    {
     var name_val=document.getElementById("name_text"+no).value;
     var country_val=document.getElementById("country_text"+no).value;
     var age_val=document.getElementById("age_text"+no).value;
    
     document.getElementById("name_row"+no).innerHTML=name_val;
     document.getElementById("country_row"+no).innerHTML=country_val;
     document.getElementById("age_row"+no).innerHTML=age_val;
    
     document.getElementById("edit_button"+no).style.display="block";
     document.getElementById("save_button"+no).style.display="none";
    }
    
    function delete_row(no)
    {
     document.getElementById("row"+no+"").outerHTML="";
    }
    
    function add_row()
    {
     var new_name=document.getElementById("new_name").value;
     var new_country=document.getElementById("new_country").value;
     var new_age=document.getElementById("new_age").value;
        
     var table=document.getElementById("data_table");
     var table_len=(table.rows.length)-1;
     var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    
     document.getElementById("new_name").value="";
     document.getElementById("new_country").value="";
     document.getElementById("new_age").value="";
    }
    
    
                                                 /* CHAPTER # 53-57*/
    
    
                                                 /* 1. Consider you have 4 images in a file as shown below:*/
    
   
   
                                                 function zoomin() { 
        var GFG = document.getElementById("cat"); 
        var currWidth = GFG.clientWidth; 
        GFG.style.width = (currWidth + 100) + "px"; 
    } 
      
    function zoomout() { 
        var GFG = document.getElementById("cat"); 
        var currWidth = GFG.clientWidth; 
        GFG.style.width = (currWidth - 100) + "px"; 
    } 
    
    
    
                                            /* CHAPTER# 58-67*/
    
    /* i. Get element of id “main-content” and assign them in a variable.
    /* ii. Display all child elements of “main-content” element.
    /* iii. Get all elements of class “render” and show their innerHTML
    /* in browser.
    /* iv. Fill input value whose element id first-name using javascript.
    /* v. Repeat part iv for id ”last-name” and “email”.*/


    
    
    var a = document.body.childNodes[1].childNodes[5]
    console.log(a)
  
    var b =document.body.childNodes[1].childNodes[5].childNodes
    console.log(b)
  
    var c =document.body.childNodes[1].childNodes[5].innerHTML
    document.write(c)
  
    var val = document.getElementsByTagName('input')[0]
    var p = document.createElement("p")
    var text = document.createTextNode("ramsha")
    p.appendChild(text)
    var msg = document.getElementsByTagName("input")[0]
    msg.appendChild(p)
    
    console.log(val)
 
    var val = document.getElementsByTagName('input')[1]
    var p = document.createElement("p")
    var text = document.createTextNode("naseer")
    p.appendChild(text)
    var msg = document.getElementsByTagName("input")[1]
    msg.appendChild(p)
    
    console.log(val)

    var val = document.getElementsByTagName('input')[2]
    var p = document.createElement("p")
    var text = document.createTextNode("chahatkhan534@gmail.com")
    p.appendChild(text)
    var msg = document.getElementsByTagName("input")[2]
    msg.appendChild(p)
    console.log(val)
    
    
    
    /* 2. use HTML code of question 1 and show the result on browser.
    /* i. What is node type of element having id “form-content”.
    /* ii. Show node type of element having id “lastName” and its child node.
    /* iii. Update child node of element having id “lastName”.
    /* iv. Get First and last child of id “main-content”.
    /* v. Get next and previous siblings of id “lastName”.
    /* vi. Get parent node and node type of element having id “email”*/
    

    
    /* i. What is node type of element having id “form-content”.
    var x = document.body.childNodes[1].childNodes[3].nodeType;
    console.log(x)*/

    
    /* ii. Show node type of element having id “lastName” and its child node.
    var nodetype =document.body.childNodes[1].childNodes[3].childNodes[7].nodeType;
    console.log(nodetype)*/

    
    /* ii. Show node type of element having id “lastName” and its child node.
    var childnode =document.body.childNodes[1].childNodes[3].childNodes[7].childNodes;
    console.log(childnode)
    */


    /* iv. Get First and last child of id “main-content”.
    var first = document.body.childNodes[1].childNodes[5].firstChild;
    console.log(first)
    
    /* iv. Get First and last child of id “main-content”.
    var m = document.body.childNodes[1].childNodes[5].lastChild;
    console.log(m)
    
    /* v. Get next and previous siblings of id “lastName”.
    var next= document.body.childNodes[1].childNodes[3].childNodes[6].nextSibling;
    console.log(next)
    
    /* v. Get next and previous siblings of id “lastName”.
    var prev= document.body.childNodes[1].childNodes[3].childNodes[6].previousSibling;
    console.log(prev)
    
    /* vi. Get parent node and node type of element having id “email”
    var parent = document.body.childNodes[1].childNodes[3].childNodes[10].parentNode
    console.log(parent)
    
    /* vi. Get parent node and node type of element having id “email”
    var node= document.body.childNodes[1].childNodes[3].childNodes[10].parentNode.nodeType
    console.log(node) */

                                             /* Thanks for reaching*/