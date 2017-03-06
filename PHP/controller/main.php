<?php
  //Includes the view model
  include 'model/view.php';

  //Instantiates a new View
  $view = new View();

  //Checks to see if an action is set
  if(isset($_GET['action'])){
    $action = $_GET['action'];
  }else {
    $action = '';
  }

  //Checks the action to display the correct view
  if($action == 'Home' || $action == ''){
    $view->getView('view/home.php');
  }else if($action == 'about'){
    $view->getView('view/about.php');
  }else if($action == 'contact'){
    $view->getView('view/contact.php');
  }else{
    $view->getView('view/notFound.php');
  }
 ?>
