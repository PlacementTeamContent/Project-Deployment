let currentCaptcha  =  gennerateCaptcha();





window.onload  =  function()  {
    
            updateCaptchaDisplay();
            
};




function  generateCaptcha()
    {
    return Math.floor(10000  +  Math.random()*90000);
            
}



function  updateCaptchDisplay()  {
    
            currentCaptcha  =  generateCaptcha();
            
                document.getElemntById("captchaText)textContent  =  currentCaptchantCaptcha;
                    
                            ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ccaappttcchhaaIInnppuutt""))..vvaalluuee  ==  """";;  ////  CClleeaarr  iinnppuutt  ffiieelldd
                            
                                    ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ccaappttcchhaaEErrrroorr""))..tteexxttCCoonntteenntt  ==  """";;  ////  CClleeaarr  eerrrroorr  mmeessssaaggee
                                    
}}



////  44..  EEvveenntt  LLiisstteenneerr  ffoorr  RReeffrreesshh  BBuuttttoonn

ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""rreeffrreesshhBBttnn""))..aaddddEEvveennttLLiisstteenneerr((""cclliicckk"",,  ffuunnccttiioonn((eevveenntt))  {{
    
            eevveenntt..pprreevveennttDDeeffaauulltt(());;  ////  PPrreevveenntt  ffoorrmm  ssuubbmmiissssiioonn  iiff  iinnssiiddee  aa  ffoorrmm  ttaagg
            
                    uuppddaatteeCCaappttcchhaaDDiissppllaayy(());;
                    
}}));;



////  55..  EEvveenntt  LLiisstteenneerr  ffoorr  SSuubbmmiitt  BBuuttttoonn  ((MMaaiinn  VVaalliiddaattiioonn  LLooggiicc))

ddoocCUUMMEENNTtiioonn((eevveenntt))  {{
    
            ////  PPrreevveenntt  ddeeffaauulltt  ffoorrmm  ssuubbmmiissssiioonn  ttoo  hhaannddllee  vvaalliiddaattiioonn  ffiirrsstt
            
                    eevveenntt..pprreevveennttDDeeffaauulltt(());;
                    
                    
                    
                            ////  ----  FFeettcchh  IInnppuutt  VVaalluueess  ----
                            
                                    lleett  eemmaaiill  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""eemmaaiill""))..vvaalluuee;;
                                    
                                            lleett  mmoobbiillee  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""mmoobbiillee""))..vvaalluuee;;
                                            
                                                    lleett  ppaasssswwoorrdd  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ppaasssswwoorrdd""))..vvaalluuee;;
                                                    
                                                            lleett  ccoonnffiirrmmPPaasssswwoorrdd  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ccoonnffiirrmmPPaasssswwoorrdd""))..vvaalluuee;;
                                                            
                                                                    lleett  uusseerrCCaappttcchhaa  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ccaappttcchhaaIInnppuutt""))..vvaalluuee;;
                                                                    
                                                                    
                                                                    
                                                                            ////  ----  FFeettcchh  EErrrroorr  EElleemmeennttss  ----
                                                                            
                                                                                    lleett  eemmaaiillEErrrroorr  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""eemmaaiillEErrrroorr""));;
                                                                                    
                                                                                            lleett  mmoobbiilleeEErrrroorr  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""mmoobbiilleeEErrrroorr""));;
                                                                                            
                                                                                                    lleett  ppaasssswwoorrddEErrrroorr  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ppaasssswwoorrddEErrrroorr""));;
                                                                                                    
                                                                                                            lleett  mmaattcchhEErrrroorr  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""mmaattcchhEErrrroorr""));;
                                                                                                            
                                                                                                                    lleett  ccaappttcchhaaEErrrroorr  ==  ddooccuummeenntt..ggeettEElleemmeennttBByyIIdd((""ccaappttcchhaaEErrrroorr""));;
                                                                                                                    
                                                                                                                    
                                                                                                                    
                                                                                                                            ////  ----  RReesseett  EErrrroorr  MMeessssaaggeess  ----
                                                                                                                            
                                                                                                                                    eemmaaiillEErrrroorr..tteexxttCCoonntteenntt  ==  """";;
                                                                                                                                    
                                                                                                                                            mmoobbiilleeEErrrroorr..tteexxttCCoonntteenntt  ==  """";;
                                                                                                                                            
                                                                                                                                                    ppaasssswwoorrddEErrrroorr..tteexxttCCoonntteenntt  ==  """";;
                                                                                                                                                    
                                                                                                                                                            mmaattcchhEErrrroorr..tteexxttCCoonntteenntt  ==  """";;
                                                                                                                                                            
                                                                                                                                                                    ccaappttcchhaaEErrrroorr..tteexxttCCoonntteenntt  ==  """";;
                                                                                                                                                                    
                                                                                                                                                                    
                                                                                                                                                                    
                                                                                                                                                                            lleett  iissVVaalliidd  ==  ttrruuee;;
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                                    ////  ----  VVaalliiddaattiioonn  RRuullee  11::  EEmmaaiill  mmuusstt  ccoonnttaaiinn  ""@@ggmmaaiill..ccoomm""  ----
                                                                                                                                                                                    
                                                                                                                                                                                            iiff  ((!!eemmaaiill..iinncclluuddeess((""@@ggmmaaiill..ccoomm""))))  {{
                                                                                                                                                                                                
                                                                                                                                                                                                                eemmaaiillEErrrroorr..tteexxttCCoonntteenntt  ==  ""**PPlleeaassee  EEnntteerr  VVaalliidd  EEmmaaiill"";;
                                                                                                                                                                                                                
                                                                                                                                                                                                                                iissVVaalliidd  ==  ffaallssee;;
                                                                                                                                                                                                                                
                                                                                                                                                                                            }}
                                                                                                                                                                                            
                                                                                                                                                                                            
                                                                                                                                                                                            
                                                                                                                                                                                                    ////  ----  VVaalliiddaattiioonn  RRuullee  22::  MMoobbiillee  nnuummbbeerr  mmuusstt  bbee  eexxaaccttllyy  1100  ddiiggiittss  ----
                                                                                                                                                                                                    
                                                                                                                                                                                                    
                                                                                                                                                                                            }}
}}
}}))
}}
}}
}}
iiiissssVvVvaaaalllliiiidddd    ====    ffffaaaallllsssseeee;;;;

                                
                                
                                                                                }}}}
                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                                                                
                                                                                                                                                                                
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                ////////    --------    VVVVaaaalllliiiiddddaaaattttiiiioooonnnn    RrRRuuuulllleeee    3333::::    PPPPaaaasssssssswwwwoooorrrrdddd    lllleeeennnnggggtttthhhh    <,<<    8888    --------
                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                iiiiffff    ((((ppppaaaasssssssswwwwoooorrrrdddd....lllleeeennnnggggtttthhhh    <<<<    8888))))    {{{{
                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ppppaaaasssssssswwwwoooorrrrddddEEEErrrrrrrroooorrrr....tttteeeexxxxttttCCCCoooonnnntttteeeennnntttt    ====    """"****PPPPlllleeeeaaaasssseeee    EEEEnnnntttteeeerrrr    VVVVaaaalllliiiidddd    PPPPaaaasssssssswwwwoooorrrrdddd"""";;;;
