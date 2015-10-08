/**
 * Created by guilherme on 9/12/15.
 */
$(document).ready(function() {
   /*$("#entrada").keypress(function(){
   		$("#valorInput").text($(this).val());
   });  */
   $("#entrada").on('keypress', function(){
   		$("#valorInput").text($(this).val());
   });       
});