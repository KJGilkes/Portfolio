<?php
  //This View class contains a function getView that takes in the view as a parameter and displays that view to the user
  Class View {
    public function getView($page = '', $data = array()){
      include $page;
    }
  }

 ?>
