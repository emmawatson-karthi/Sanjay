var text_msg = document.querySelector(".text-msg");
var Option_list = document.querySelector(".option-list");
var Brand_name = document.querySelector(".brand-name").innerHTML;
var profile_img_src = document.querySelector(".profile-image-src").innerHTML;
var noti_url = document.querySelector(".noti-url").innerHTML;
var redirect_link = document.querySelector(".redirect-link").innerHTML;
var form_iframe = document.getElementById("form-iframe").innerHTML;
var body = document.querySelector("body");
var head = document.querySelector("head");
var mystyle = document.createElement("link");
var myscript = document.createElement("script");
var main_box = document.createElement("div");
main_box.style.display = "none";
var whatsapp_div = document.createElement("div");
var call_div = document.createElement("div");
var form_div = document.createElement("div");
var click_div = document.createElement("div");
var form_full_box = document.createElement("div");
var chat_box = document.createElement("div");

// get Call to Number from user
var callto = document.querySelector(".callto");
// get whatsapp Number from user
var whatsapp_number_cw = document.querySelector(".whatsto").innerHTML;
// Append all Element in The body
body.prepend(main_box);
head.append(mystyle);
main_box.append(whatsapp_div);
main_box.append(call_div);
main_box.append(form_div);
main_box.append(click_div);
body.append(form_full_box);
body.append(chat_box);
// Link StyleSheet
mystyle.setAttribute("rel","stylesheet");
mystyle.setAttribute("href","style.css");
// Add Attributes
main_box.setAttribute("class","icons-box")
click_div.setAttribute("id","click-call-and-whatsapp-btn");
click_div.setAttribute("class","btn-pulse");
whatsapp_div.setAttribute("id","whatsapp");
whatsapp_div.setAttribute("class","whatsapp");
call_div.setAttribute("id","call");
call_div.setAttribute("class","call-btn");
form_div.setAttribute("id","form-icon");
form_div.setAttribute("class","form-icon-btn");
form_full_box.setAttribute("id","form-full-box");
form_full_box.setAttribute("class","form-full-box");
chat_box.setAttribute("id","chat-box");
// for form iframe
console.log(form_iframe)
// Set Inner Content
whatsapp_div.style.backgroundImage = "url(whatsapp-icon.png)";
whatsapp_div.style.backgroundSize = "cover";
call_div.style.backgroundImage = "url(call-icon.png)";
call_div.style.backgroundSize = "cover";
form_div.style.backgroundImage = "url(form-icon.png)";
form_div.style.backgroundSize = "cover";
click_div.style.backgroundImage = "url(onclick-icon.png)";
click_div.style.backgroundSize = "cover";
form_full_box.innerHTML = form_iframe;

// chat head Element
var chat_head = document.createElement("div");
chat_head.setAttribute("id","chat-head");
// user Image
var user_img = document.createElement("div");
user_img.setAttribute("class","user-img");
var profile_img = document.createElement("img");
profile_img.setAttribute("src",profile_img_src);
profile_img.setAttribute("width","100%");
profile_img.setAttribute("height","100%");
// user info
var user_info = document.createElement("div");
user_info.setAttribute("class","user-info");
user_info.innerHTML = '<strong>'+Brand_name+'</strong><p>Customer Support</p>'
// close button for chat box
var close_btn_for_chat_box = document.createElement('span');
close_btn_for_chat_box.setAttribute("id","chat-close");
close_btn_for_chat_box.setAttribute("onclick","chat()");
close_btn_for_chat_box.innerHTML = '❌';
// ...prepend and append for chat box elements...
// Set Element inside the chat head 
user_img.prepend(profile_img);
chat_head.prepend(user_img);
chat_head.append(user_info);
chat_head.append(close_btn_for_chat_box);
// chat boby Element
var chat_body = document.createElement("div");
chat_body.setAttribute("id","chat-body");
// var chat_body_heading = document.createElement("div");
// set element inside the chat body
for(let i = 0 ; i < Option_list.children.length; i++){
    let j = i+1;
let y = document.createElement('label');
    y.setAttribute("for","messages-"+j);
    y.setAttribute("class","message");
    y.setAttribute("id","message-"+j);
    y.setAttribute('onclick','dochecked()')
y.style.width = "200px";
y.style.height = "40px";

let x = document.createElement("input");
    x.setAttribute("type","text");
    x.setAttribute("id","messages-"+j);
    x.setAttribute("name","Type Somewthingme");
    x.setAttribute("placeholder","Type Something");
    x.setAttribute("class","message-box");

y.innerHTML = Option_list.children[i].innerHTML;
chat_body.append(y);
y.append(x);
}
// TEXT MESSAGE
var text_msg_count = text_msg.children.length;
for(let i = text_msg_count - 1 ; i>=0;i--){
    let x = document.createElement('p');
    x.setAttribute("id","text-msg-"+i);
    x.setAttribute("class","text-msg-p message");
    x.innerHTML = text_msg.children[i].innerHTML;
    let text_msg_width = (text_msg.children[i].innerHTML.length)*10;
calculate_width();
function calculate_width(){
    if(text_msg_width < 200){
        x.style.width = text_msg_width+"px";
    }else{
        x.style.width = "200px";
    }
} chat_body.prepend(x);
}

// chat footer Element
chat_footer = document.createElement("div");
chat_footer.setAttribute("class","chat-footer");
chat_footer_link = document.createElement("div");
chat_footer_link.setAttribute("id","link");
chat_footer_text = document.createElement("div");
chat_footer_text.setAttribute("id","footer-text");
chat_footer_text.innerHTML = 'Type Somewthing';
chat_footer_span = document.createElement("div");
chat_footer_span.setAttribute("id","send-icon");
// set element inside the chat footer
chat_footer_link.append(chat_footer_text);
chat_footer_link.append(chat_footer_span);
chat_footer.append(chat_footer_link);
// set all element (prepend and append) to chat box
chat_box.prepend(chat_head);
chat_box.append(chat_body);
chat_box.append(chat_footer);
var notimp3 = document.getElementById("noti-mp3");
var sendbtn = document.querySelector("#link");
var box_1 = document.querySelector(".box-1");
var box_2 = document.querySelector(".box-2");
var box_3 = document.querySelector(".box-3");
var box_4 = document.querySelector(".box-4");
var first_msg = document.querySelector("#first-msg");
var cshow = false;
var chated = false;
var chatclose = document.querySelector("#chat-close");
var chatbox = document.getElementById("chat-box");

// functions
setInterval(function(){
    chat_box.style.display ="flex";
    },1000);

    function checking(){
        console.log("checked = "+localStorage.getItem("checked"))
        // if(localStorage.getItem("checked") == "yes"){
        //     first_msg.innerHTML = "Welcome Back ";
        // }    
    };
   
    setInterval(checking,5000);
    chat_body.addEventListener("click",function(){
    
 });
    chatclose.addEventListener("click",function(){
            inputselectunchecked();
     });
     sendbtn.addEventListener("click",function(){
        let x = document.querySelector("#messages-1").value;
    if(x !== ""){
        let str = x;
        let y = str.replaceAll(" ","%20");
        window.location.assign("https://wa.me/+918428114487?text="+y);
    }else{
        alert("Please Type Something");
    }
    });
    function load(){
                for(let i = 0 ; i < Option_list.children.length; i++){
                    document.querySelector("#message-"+(i+1)).style.opacity = "0";
                    document.querySelector("#message-"+(i+1)).style.marginLeft = "-20px";
                }
            chatopen();
    if(cshow == true){
        for(let j = 0; j<text_msg_count;j++){
                let x = document.querySelector("#text-msg-"+j);
                x.style.opacity = 0;
                x.style.marginLeft = "-20px";
                        setTimeout(function(){
                            if(cshow == true){
                            window.location.href = "#text-msg-"+(j+1);
                                for(let i = 0; i<5 ; i++){
                                x.style.opacity = i/4;
                            }
                                for(let i= -5; i<12;i++){
                                x.style.marginLeft = (i*2)+"px";
                            }
                        }
                        },1200*(j+1));
        }
        setTimeout(function(){
            for(let j = 0; j<Option_list.children.length;j++){
                let x = document.querySelector("#message-"+(j+1));
                        x.style.opacity = 0;
                        x.style.marginLeft = "-20px";
                                setTimeout(function(){
                                    if(cshow == true){
                                    window.location.href = "#message-"+(j+1);
                                        for(let i = 0; i<5 ; i++){
                                        x.style.opacity = i/4;
                                    }
                                        for(let i= -5; i<9;i++){
                                        x.style.marginLeft = (i*2)+"px";
                                    }
                                }
                                },1200*(j+1));
                            }},1500*(text_msg_count));
                        } 
                    }          

var x = false;
// get Element By Id
var click_btn = document.getElementById("click-call-and-whatsapp-btn");
var whatsapp = document.getElementById("whatsapp");
var call = document.getElementById("call");
var form_id = document.getElementById("form-icon");
var form_box_open = document.getElementById("form-full-box");
// var inputvalue = document.querySelector('input[name="Type Somewthing"]:checked').value;

    
// set Onclick Attribute
click_div.setAttribute("onclick","showicon()");
whatsapp.setAttribute("onclick","whatsto()");
whatsapp.setAttribute('data-before', 'WHATSAPP');
call.setAttribute("onclick","callthis()");
form_id.setAttribute("onclick","formthis()");
form_box_open.addEventListener("click",function(){
    if(x == false){
        form_box_open.style.top = "100%"; 
    }else{
        showicon();
        form_box_open.style.top = "100%";
    }
   
})
// checking mobile and destop with
var bodywidth =  document.body.clientWidth;
// set Call Value to call Hover Box
Phone_number = callto.innerHTML;
console.log(Phone_number)
// link to whatsapp chat
function whatsto(){
    load();
}
function callthis(){
    window.location.assign("tel:91"+Phone_number);
}
function formthis(){
    if(cshow == true){
        chatopen();
    }
    form_box_open.style.top = "0%";
}
function showicon(){
   if (x == false){
    whatsapp.setAttribute('data-before', 'WHATSAPP');
    whatsapp.style.backgroundImage = "url(whatsapp-icon.png)";
    whatsapp.style.bottom = "90px";
    whatsapp.style.left = "90px";
    call.style.bottom = "90px";
    form_id.style.left = "90px";
    click_btn.removeAttribute("class","btn-pulse");
    click_div.style.transform = "rotate(360deg)";
    click_div.style.backgroundImage = "url(onclose-icon.png)";
    x=true;
   }
   else{
    if(cshow == true){
        chatbox.style.left = "-330px";
        cshow = false;
        inputselectunchecked();
        window.location.href = "#";
        document.querySelector("#send-icon").style.right = "78%";
        chat_footer_text.innerHTML = 'Type Somewthing';
    }
    whatsapp.setAttribute('data-before', 'WHATSAPP');
    whatsapp.style.backgroundImage = "url(whatsapp-icon.png)";
    whatsapp.style.bottom = "30px";
    whatsapp.style.left = "25px";
    call.style.bottom = "30px";
    form_id.style.left = "25px";
    click_btn.setAttribute("class","btn-pulse")
    click_div.style.transform = "rotate(0deg)";
    click_div.style.backgroundImage = "url(onclick-icon.png)";
    x=false;
   }
}
setTimeout(()=>{main_box.style.display = "block";},3000);

function chatopen(){
    if(cshow == false){
        chatbox.style.left = "15px";
        cshow = true;
        whatsapp.setAttribute('data-before', 'CLOSE');
        whatsapp.style.backgroundImage = "url(onclose-icon.png)";
    }else{
        document.querySelector("#send-icon").style.right = "78%";
        chat_footer_text.innerHTML = 'Type Somewthing';
        whatsapp.setAttribute('data-before', 'WHATSAPP');
        whatsapp.style.backgroundImage = "url(whatsapp-icon.png)";
        inputselectunchecked();
        chatbox.style.left = "-330px";
        cshow = false;
        for(let j = 0; j<text_msg_count;j++){
            let x = document.querySelector("#text-msg-"+j);
            x.style.opacity = 0;
            x.style.marginLeft = "-20px";
        }
    }
}
function chat(){
    chatopen();
}
function inputselectunchecked(){
    document.querySelector("#send-icon").style.right = "78%";
    chat_footer_text.innerHTML = 'Type Somewthing';
    for(let i = 1 ; i <= Option_list.children.length; i++){
        document.querySelector("#messages-"+i).checked = false;
    }
    chat_footer_link.style.backgroundColor = "#bebebe";
}
function dochecked(){
        chat_footer_link.style.backgroundColor = "#09e072";
        document.querySelector("#send-icon").style.right = "0";
        chat_footer_text.innerHTML = 'Chat';
}
// setInterval(function(){
//     for(let j = 0; j<Option_list.children.length;j++){
//         let x = document.querySelector("#message-"+(j+1)).children[0];
//         if(x.focus == true){
//          document.querySelector("#send-icon").style.right = "0";
//          chat_footer_text.innerHTML = 'Chat';
//          let x = document.querySelector("#message-"+(j+1));
//          x.style.boxShadow = "3px 3px 20px rgba(0, 0, 0, 0.6)";
//         }
//         else{
//             let x = document.querySelector("#message-"+(j+1));
//             x.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0)";
//         }
//     }
// },100)

