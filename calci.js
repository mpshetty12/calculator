const firebaseConfig = {
    apiKey: "AIzaSyAQdEtrNOGn3vre-KI83wJ2hTLKZBXhnF4",
    authDomain: "calculator-6acad.firebaseapp.com",
    databaseURL: "https://calculator-6acad.firebaseio.com",
    projectId: "calculator-6acad",
    storageBucket: "calculator-6acad.appspot.com",
    messagingSenderId: "645112758552",
    appId: "1:645112758552:web:4e5c24be5608baeb549e6d",
    measurementId: "G-BXQ1DWCVW9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var temp=0;
var v=0;
var w=0;

function one()
{
    w=document.getElementById("transcripts").innerText = (w*10)+1;
}
function two()
{
    w=document.getElementById("transcripts").innerText = (w*10)+2;
    //var op = document.getElementById("operator").innerHTML;
}
function three()
{
    w=document.getElementById("transcripts").innerText = (w*10)+3;
}
function four()
{
    w=document.getElementById("transcripts").innerText = (w*10)+4;
}
function five()
{
    w=document.getElementById("transcripts").innerText = (w*10)+5;
}
function six()
{
    w=document.getElementById("transcripts").innerText = (w*10)+6;
}
function seven()
{
    w=document.getElementById("transcripts").innerText = (w*10)+7;
}
function eight()
{
    w=document.getElementById("transcripts").innerText = (w*10)+8;
}
function nine()
{
    w=document.getElementById("transcripts").innerText = (w*10)+9;
}
function zero()
{
    w=document.getElementById("transcripts").innerText = (w*10)+0;
}
function cancel()
{
    document.getElementById("transcripts").innerText = "0000000000000000000";
    document.getElementById("operator").innerText = "C";
    v=w=0;
}

function ADD()
{
    var op = document.getElementById("operator").innerHTML;
    if(op=='+' || op=='C')
    {
        v = temp+w;
        temp=v;
    }
    if(op=='-')
    {
        v = temp-w;
        temp=v;
    }
    if(op=='*')
    {
        v = temp*w;
        temp=v;
    }
    if(op=='/')
    {
        v = temp/w;
        temp=v;
    }
    w=0;
    //v=w;
    //w=0;

    document.getElementById("operator").innerHTML = '+';
}
function SUB()
{
    var op = document.getElementById("operator").innerHTML;
    if(op=='+' || op=='C' )
    {
        v = temp+w;
        temp=v;
    }
    if(op=='-')
    {
        v = temp-w;
        temp=v;
    }
    if(op=='*')
    {
        v = temp*w;
        temp=v;
    }
    if(op=='/')
    {
        v = temp/w;
        temp=v;
    }
    w=0;
    document.getElementById("operator").innerHTML = '-';
   // alert(v-w);
}
function MUL()
{
    var op = document.getElementById("operator").innerHTML;
    if(op=='+' || op=='C')
    {
        v = temp+w;
        temp=v;
    }
    if(op=='-')
    {
        v = temp-w;
        temp=v;
    }
    if(op=='*')
    {
        v = temp*w;
        temp=v;
    }
    if(op=='/')
    {
        v = temp/w;
        temp=v;
    }
    w=0;
    document.getElementById("operator").innerHTML = '*';
    //alert(v*w);
}
function DIV()
{
    var op = document.getElementById("operator").innerHTML;
    if(op=='+' || op=='C')
    {
        v = temp+w;
        temp=v;
    }
    if(op=='-')
    {
        v = temp-w;
        temp=v;
    }
    if(op=='*')
    {
        v = temp*w;
        temp=v;
    }
    if(op=='/')
    {
        v = temp/w;
        temp=v;
    }
    w=0;
    document.getElementById("operator").innerHTML = '/';
    //alert(v/w);
}

function ANS() 
{
    var ans;
    var op = document.getElementById("operator").innerHTML;
    if(op=='+')
    {
        ans = v+w;
    }
    if(op=='-')
    {
        ans = v-w;
    }
    if(op=='*')
    {
        ans = v*w;
    }
    if(op=='/')
    {
        ans = v/w;
    }
    document.getElementById("transcripts").innerHTML = ans;
    temp=v=ans;
    w=0;
    document.getElementById("operator").innerText = "C";
}
function BACK()
{
    w = Math.floor(w/10);
    document.getElementById("transcripts").innerHTML = w;
}