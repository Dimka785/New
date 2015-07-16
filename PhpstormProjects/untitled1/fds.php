<?php

//class NewClass
//{
//    public $var = '123';
//
//
//    public function Newfunc() {
//        echo $this->var;
//    }
//}
//$obj=new NewClass();
//echo $obj->Newfunc();
class Singleton {
    private static $instance;
    private $_temp;
    private function __construct() {}
    public static function getInstance(){
        if (empty(self::$instance)) {
            self::$instance = new Singleton();
        }
        return self::$instance;
    }
    public function setTemp($val)
    {
        $this->_temp = $val;
    }
    public function getTemp()
    {
        return $this->_temp;
    }
}
$pref = Singleton::getInstance();
$pref->setTemp('hello');
echo $pref->getTemp() . '</br>';
unset ($pref);

$pref2 = Singleton::getInstance();
echo $pref2->getTemp();