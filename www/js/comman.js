$(document).ready(function(e){
    //alert("Hari Om");
    
    
    $("#p1").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").removeClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#mySidebar").css("display","none");
        
    });
    $("#hp").click(function(e){
        e.preventDefault();
        $("#page1").addClass("w3-hide");
        $("#home_page").removeClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#mySidebar").css("display","none");
        
        
    });
   
   
     $("#p3").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").removeClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#mySidebar").css("display","none");
         
    });
     $("#p4").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").removeClass("w3-hide");
        $("#page5").addClass("w3-hide");
        $("#mySidebar").css("display","none");
        
    });
     $("#p5").click(function(e){
        e.preventDefault();
        $("#home_page").addClass("w3-hide");
        $("#page1").addClass("w3-hide");
        $("#page2").addClass("w3-hide");
        $("#page3").addClass("w3-hide");
        $("#page4").addClass("w3-hide");
        $("#page5").removeClass("w3-hide");
        $("#mySidebar").css("display","none");
         
         
    });
    
    /*------------------Suladi Select-----------------------------------------*/
      $(".select").change(function(e){
          //alert("HAri Om");
          var val=$(this).val();
          if(val==1)
          {
             
          }
          else if(val==2)
          {
             $("#s2").removeClass("w3-hide");
             $("#s1").addClass("w3-hide");
             $("#s3").addClass("w3-hide");
          }
          else if(val==3)
          {
             $("#s2").addClass("w3-hide");
             $("#s1").addClass("w3-hide");
             $("#s3").removeClass("w3-hide"); 
          }
          else
          {
             $("#s1").removeClass("w3-hide");  
             $("#s2").addClass("w3-hide"); 
             $("#s3").addClass("w3-hide");
            
          }
              
      });
  /*-------------------------Sidebar Animation-----------------------------*/  
           
    $(".sidebar_toggle").click(function(){
        //alert("Hari Om");
            $("#mySidebar").animate({
                width: "toggle"
            },function(e){});
        });
    
 /*----------------------Suladi -------------------------------------*/
    $("#si1").click(function(e){
        e.preventDefault();
        //alert("Harim OM");
        $("#page2").removeClass("w3-hide");
        $("#home_page").addClass("w3-hide");
        $("#s1").removeClass("w3-hide");  
        $("#s2").addClass("w3-hide"); 
        $("#s3").addClass("w3-hide");
        $("#mySidebar").css("display","none");
    });
    $("#si2").click(function(e){
        e.preventDefault();
        //alert("Harim OM");
        $("#page2").removeClass("w3-hide");
        $("#home_page").addClass("w3-hide");
        $("#s1").addClass("w3-hide");  
        $("#s2").removeClass("w3-hide"); 
        $("#s3").addClass("w3-hide");
        $("#mySidebar").css("display","none");
    });
    $("#si3").click(function(e){
        e.preventDefault();
        //alert("Harim OM");
        $("#page2").removeClass("w3-hide");
        $("#home_page").addClass("w3-hide");
        $("#s1").addClass("w3-hide");  
        $("#s2").addClass("w3-hide"); 
        $("#s3").removeClass("w3-hide");
        $("#mySidebar").css("display","none");
    });
});