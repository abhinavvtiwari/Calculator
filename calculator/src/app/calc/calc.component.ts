import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.input="";
  }

  input:any;
  value:any;
  result:any;
  firstnumber:any;
  secondnumber:any;
  op:string='';
  
 
  pressNum(num: string) {
    this.input=this.input+num;
  }
 
 
  pressOperator(op: string) {
    if(op!='+' && op!='-' && op!='*' && op!='/' && op!='pow'){
      this.op=op;
      this.getAnswer();
    }else{
      this.op=op;
    this.firstnumber=this.input;
    this.input="";
    }
  }

  getAnswer() {
    let con;
    if(this.op=='+'){
      con=1;
    }
    else if(this.op=='-'){
      con=2;
    }else if(this.op=='*'){
      con=3;
    }else if(this.op=='/'){
      con=4;
    }else if(this.op=='sin'){
      con=5;
    }else if(this.op=='cos'){
      con=6;
    }else if(this.op=='tan'){
      con=7;
    }else if(this.op=='pow'){
      con=8;
    }
    switch(con){
    case 1:
      this.result=parseInt(this.firstnumber)+parseInt(this.input);
    break;
    case 2:
      this.result=parseInt(this.firstnumber)-parseInt(this.input);
    break;
    case 3:
      this.result=parseInt(this.firstnumber)*parseInt(this.input);
    break;
    case 4:
      this.result=parseInt(this.firstnumber)/parseInt(this.input);
    break;
    case 5:
      this.result=Math.sin(parseInt(this.input));
    break;
    case 6:
      this.result=Math.cos(parseInt(this.input));
    break;
    case 7:
      this.result=Math.tan(parseInt(this.input));
    break;
    case 8:
      this.result=Math.pow(parseInt(this.firstnumber), parseInt(this.input));
    break;
  }
}

  clear() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }
 
  allClear() {
    this.result = '';
    this.input = '';
  }
  

}
