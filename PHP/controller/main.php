<?php
  include 'model/view.php';


  $view = new View();

  if(isset($_GET['action'])){
    $action = $_GET['action'];
  }else {
    $action = '';
  }

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
