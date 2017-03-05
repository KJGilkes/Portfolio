<?php

  Class View {
    public function getView($page = '', $data = array()){
      include $page;
    }
  }

 ?>
