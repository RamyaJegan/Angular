$(document).ready(function(){
    $("#notes-dis").hide();
    
    // FOR BACKDROP

    $('#myModal').modal({
        show: false,
        backdrop: 'static',
        keyboard: false
    })
    $('.modal').modal({
        show: false,
        backdrop: 'static',
        keyboard: false
    })

    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('body').on('hidden.bs.popover', function (e) {
        $(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
    });
    
    
    // TAB SELECTION AND ITS STATUS CODE

        var isStandard=1;
        $(".tab-custom").on('click', function () {
            tab_status=($(this).text()=="STANDARD") ? isStandard=1:isStandard=0;           
            console.log(isStandard)
        })

    // JSON DATA

      var standard=[
         { id:1,item_name:"15 Bridge builder",lab1:1,lab2:1,lab3:1 },
         { id:2,item_name:"19 Bridge builder",lab1:2,lab2:2,lab3:2 },
         { id:3,item_name:"20 Bridge builder",lab1:3,lab2:3,lab3:3 },
         { id:4,item_name:"21 Bridge builder",lab1:4,lab2:4,lab3:4 },
         { id:5,item_name:"22 Bridge builder",lab1:5,lab2:5,lab3:5 }
     ];

     var popover_stand=[
         {id:1,item_type:213220,length:450,breadth:250,height:25,width:200,damage_val:2,repeated_val:5,panel_name:"PF01",item_name:"15 Bridge Builder",component:"Beam",part:"Bottom beam",image:"images/i1.jpg",panel:"PF02"},
         {id:2,item_type:213221,length:450,breadth:250,height:25,width:200,damage_val:3,repeated_val:6,panel_name:"PF02",item_name:"19 Bridge Builder",component:"Beam",part:"Bottom beam",image:"images/i4.jpg",panel:"PF03"},
         {id:3,item_type:213222,length:450,breadth:250,height:25,width:200,damage_val:4,repeated_val:7,panel_name:"PF03",item_name:"20 Bridge Builder",component:"Beam",part:"Bottom beam",image:"images/i6.jpg",panel:"PF04"},
         {id:4,item_type:213223,length:450,breadth:250,height:25,width:200,damage_val:5,repeated_val:10,panel_name:"PF04",item_name:"21 Bridge Builder",component:"Beam",part:"Bottom beam",image:"images/i8.jpg",panel:"PF05"},
         {id:5,item_type:213224,length:450,breadth:250,height:25,width:200,damage_val:6,repeated_val:8,panel_name:"PF05",item_name:"22 Bridge Builder",component:"Beam",part:"Bottom beam",image:"images/i9.jpg",panel:"PF06"}
     ];
    

    // APPROVE BUTTON ON CLICK
    $("#app_btn").on("click",function(){
        $("#add_note").show();
        $("#rej_note").hide();
        
    })

    $("#add_note").on("click",function(){        
        var notes=$("#note").val();
        console.log(notes);
        //$("#note_val").append(notes + "<br>");
        //$("#notes-dis").show();
    })

    // REJECT BUTTON ON CLICK

    $("#rem_btn").on("click",function(){
        console.log("hai")
        $("#add_note").hide();
        $("#rej_note").show();
        $(".required").show();
    })

    $("#rej_note").on("click",function(){        
        var notes=$("#note1").val();
        console.log(notes);
    })

    // SELECT ALL CHECKBOX

    $(".select_all").on("click",function(){         
        if($('input').prop("checked") == true){
            $('input').prop("checked",false);
        }
        else{
            $('input').prop("checked",true);
        }
    })
    $(".check_data").on("change",function(e){         
        if($('input').prop("checked") == true){
            $('input').prop("checked",false);  
            $('input[id="'+e.target.id+'"]').prop("checked",true); 
           console.log("e:",e.target.id)
        }
       
    })    
   

    // STANDARD  DATA

    function standardData(standard){
        for(i=0;i<standard.length;i++){
            console.log(i)
            var standard_d='<div class="check_list"><div class="container" >'+
                            // <!-- CHECKBOX AND VALUE -->
                             '<label >'+ standard[i].item_name +
                                '<input type="checkbox" class="case"  id="check-'+i+'">' +
                                '<span class="checkmark" ></span>'+
                             '</label>'+
                            // <!-- ICON TO POPOVER -->
                             '<div class="pop_over" data-container="body" data-toggle="popover" data-placement="top"   data-target="#popover'+i+'" onclick="item_data_click(' + i + ')">'+
                                    '<img src="images/i.png" >'+
                             '</div>'+
                            '</div>'+
                            // <!-- 3 RECTANGLE LABEL INSIDE THE CHECKBOX DIV -->                
                            '<div class="rectangle color1">'+standard[i].lab1+'</div>'+
                            '<div class="rectangle color2">'+standard[i].lab2+'</div>'+
                            '<div class="rectangle color3">'+standard[i].lab3+'</div>'+
                            // <!-- IMAGE POPUP -->
                            '<div class="notes_pop" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#open_img'+i+'"><img src="images/add_note.png" ></div></div>';
             $(".check_data").append(standard_d);
        }

    }
    standardData(standard);
    popover_icon(popover_stand);
    popup_image(popover_stand);
    // POP OVER
    
    $('[data-toggle="popover"]').popover({ 
        html : true,
        content: function() {           
            var id=$(".id").text();             
            console.log(id[id.length-1]);
            return $('#popover'+id[id.length-1]).html(); 
        }
      });
    
   
    // POPOVER ON CLICK OF ICON

    function popover_icon(popover_stand){
     for(i=0;i<popover_stand.length;i++){
        var popover='<div class="popover" id="popover'+i+'">'+
                     //<!-- HEADING FOR POPOVER --><
                            //'<div id="id" style="display:none">'+popover_stand[i].id+'</div>'+
                            '<div class="heading">'+
                                '<div class="text">'+
                                popover_stand[i].item_type+
                                    '<div class="repeat">'+
                                        "Repeated"+'<span class="num">'+popover_stand[i].repeated_val+'</span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="t-data">'+
                                    '<span>'+ "L:"+popover_stand[i].length +"m" + '</span>'+
                                    '<li>'+"B:"+popover_stand[i].breadth+"m"+'</li>'+
                                    '<li>'+"H:"+ popover_stand[i].height+"m"+'</li>'+
                                    '<li>'+"W:"+ popover_stand[i].width+"mt"+'</li>'   +              
                                '</div>' +               
                            '</div>'+
                    //<!-- CONTENT OF POPOVER -->
                    '<div class="content">'+
                        '<div class="text">'+
                            "Damage"+'<span class="num">'+popover_stand[i].damage_val+'</span>'+
                        '</div>'+
                        '<div class="text1">'+popover_stand[i].panel_name+'</div>'+
                        '<div class="t-data">'+
                            '<span>'+popover_stand[i].item_name+'</span>'+
                            '<li>'+popover_stand[i].component+'</li>'+
                            '<li>'+popover_stand[i].part+'</li>'  +                                  
                        '</div>'+
                        '<div class="hold_img">'+
                            '<div class="images" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#open_img'+i+'">'+
                                '<img src="images/img.png">'+
                            '</div>'+
                            '<div class="images" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#his_pop">'+
                                '<img src="images/refresh.png">'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="text1 align">'+"PF02"+'</div></div>';
        $(".pop").append(popover);
      }            
    }

    // POPUP ON IMAGE ICON CLICK

    function popup_image(popover_stand)
    {
      for(i=0;i<popover_stand.length;i++){
        var popup=
                    '<div class="modal fade" id="open_img'+i+'" role="dialog">'+
                        '<div class="modal-dialog dialog" >'   +     
                            //<!-- Modal content-->
                            '<div class="modal-content m-content">'+
                                '<div class="modal-header">'+
                                    '<button type="button" class="close" data-dismiss="modal">Cancel</button>'+
                                    '<h4 class="modal-title font-style">'+"Image"+'</h4>'+
                                '</div>'+
                                '<div class="modal-body">'+
                                    ' <div class="col-md-12 col-sm-12">  '   + 
                                        '<img src="'+popover_stand[i].image+'" class="img-responsive"  alt="Image">'+
                                        //<!-- <span>Vandor - Industrial and Business Park</span> -->
                                    '</div>'+
                                '</div>'+
                                '<div class="modal-footer">'+
                                    // <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Add</button> -->
                                '</div>'+
                            '</div>'  +       
                        '</div>'+
                    '</div>';
        $(".pop_on_checkbox").append(popup);
      }
    }

});

function item_data_click(i){       
    var id='<div id="id-'+i+'" class="id" style="display:none">'+i+'</div>';   
    $(".pop").append(id);    
}