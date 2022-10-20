import { createGlobalStyle } from 'styled-components';

export const lightTheme ={
    background :"#fff",
    color:"#000",
}

export const darkTheme ={
    background :"#000",
    color:"#beb8bf",
    border:"1px solid #ccc",
    footerbg:"#2f2832",
    inputbg:"#383138",
    boxshadow:"unset",
    liborder:"1px solid #363030",
    whitecolor:"#ffff",
    addprdctbg:"#423b42",
}
   


export const GlobalStyles= createGlobalStyle`
   body {
       background-color:${(props) => props.theme.background};  
       color:${(props) => props.theme.color}; 
   }
   a,p,b,h6,h4{
    color:${(props) => props.theme.color} !important; 
  }
  .step1 li{
    color:${(props) => props.theme.color} !important; 
  }
  .symbols li i{
    color:${(props) => props.theme.color}; 
  }
  .app_step h5{
    color:${(props) => props.theme.color}; 
  }
  .accordion-item{
    background-color:${(props) => props.theme.background}; 
    border: ${(props) => props.theme.border};
  }
  .help_breadbrumb{
    background-color:${(props) => props.theme.background};  

  }
 footer{
     background:${(props) => props.theme.footerbg} !important;
     color:${(props) => props.theme.color}; 
 }
 .download h5{color:${(props) => props.theme.color} !important; }
 .placeinfo .form-control, .form-select{background:${(props) => props.theme.inputbg}}
 .list1{background:${(props) => props.theme.inputbg}}
 .shop_name{background:${(props) => props.theme.inputbg}}
 .address h6{background:${(props) => props.theme.background} !important;box-shadow:${(props) => props.theme.boxshadow} !important;}
 .address h4 span{ color:${(props) => props.theme.color}; }
 .review_div ul li{box-shadow:${(props) => props.theme.boxshadow} !important;
 background:${(props) => props.theme.inputbg}}
 .feedback .form-control{box-shadow:${(props) => props.theme.boxshadow} !important;
 background:${(props) => props.theme.inputbg}}
 .review_bottom ul li{border:${(props) => props.theme.liborder} !important;}
 .user_review{border-right:${(props) => props.theme.liborder} !important;}
 .list_info{border:${(props) => props.theme.liborder} !important;}
 .review_top{border-bottom:${(props) => props.theme.liborder} !important;}
.address h1 {color:${(props) => props.theme.whitecolor};}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    background:${(props) => props.theme.inputbg};
    border:${(props) => props.theme.boxshadow} !important;
    color:${(props) => props.theme.color}; 
}
.product_price{
    box-shadow:${(props) => props.theme.boxshadow} !important;
    background:${(props) => props.theme.inputbg};
}
.cat label input + span{ color:${(props) => props.theme.color}; }
.searchbar{
    background:${(props) => props.theme.inputbg};
    border:${(props) => props.theme.boxshadow} !important;
    border-radius:${(props) => props.theme.boxshadow} !important;
}
.search_place .input-group-text{background:${(props) => props.theme.inputbg};
border:${(props) => props.theme.boxshadow} !important;
}
.add_product{background:${(props) => props.theme.addprdctbg}}
.add_product .form-control{background:${(props) => props.theme.inputbg};
border:${(props) => props.theme.boxshadow} !important;}
.placeinfo .form-control, .form-select{color:${(props) => props.theme.color} !important; }
.add_product .form-control{color:${(props) => props.theme.color} !important;}
.post_u{
    box-shadow:${(props) => props.theme.boxshadow} !important;
    background:${(props) => props.theme.inputbg};
}
.cetegory_left .nav-pills .nav-link.active{
    background:${(props) => props.theme.inputbg}!important;
}

.form-control{color:${(props) => props.theme.color} !important;}
.form-control:focus{background:${(props) => props.theme.inputbg}!important;}
#basic-addon1 i{color:${(props) => props.theme.color} !important;}
`;

