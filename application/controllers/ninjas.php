<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ninjas extends CI_Controller {

	public function index()
	{
		if (!$this->session->userdata('gold') && !$this->session->userdata('activities'))
		{
			$this->session->set_userdata('gold', 0);
			$this->session->set_userdata('activities', ["&nbsp;", "win"]);
		}
		$this->load->view('index');
	}

	public function farm()
	{
		$gold = rand(10,20);
		$activity = ['You entered a farm and earned ' . $gold . ' gold(s)', 'win'];
		$this->session->set_userdata('activities', $activity);
		$running_total = $this->session->userdata('gold');
		$running_total += $gold;
		$this->session->set_userdata('gold', $running_total);
		echo $this->session->userdata('gold');
	}

	public function cave()
	{
		$gold = rand(5,10);
		$activity = ['You entered a cave and earned ' . $gold . ' gold(s)', 'win'];
		$this->session->set_userdata('activities', $activity);
		$running_total = $this->session->userdata('gold');
		$running_total += $gold;
		$this->session->set_userdata('gold', $running_total);
		echo $this->session->userdata('gold');
	}

	public function house()
	{
		$gold = rand(2,5);
		$activity = ['You entered a cave and earned ' . $gold . ' gold(s)', 'win'];
		$this->session->set_userdata('activities', $activity);
		$running_total = $this->session->userdata('gold');
		$running_total += $gold;
		$this->session->set_userdata('gold', $running_total);
		echo $this->session->userdata('gold');
	}

	public function casino()
	{
		$odds = mt_rand(0,1)<=0.2;
		$gold = rand(0,50);
		if ($odds == 0)	{
			$gold *= -1;
			$activity = ['You entered a casino and lost ' . $gold . ' gold(s)', 'loss'];
		} else { 
			$activity = ['You entered a casino and earned ' . $gold . ' gold(s)', 'win'];
		}
		$this->session->set_userdata('activities', $activity);
		$running_total = $this->session->userdata('gold');
		$running_total += $gold;
		$this->session->set_userdata('gold', $running_total);
		echo $this->session->userdata('gold');
	}

	public function activity()
	{
		echo $this->session->userdata('activities')[0];
	}

	public function activity_class()
	{
		echo $this->session->userdata('activities')[1];
	}

}