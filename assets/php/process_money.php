<?php
session_start();
$building = $_POST["building"];

	//for an alternative to if/else, going to use case/switch
	switch ($building) {
		case 'farm':
			$gold = rand(10,20);
			break;

		case 'cave':
			$gold = rand(5,10);
			break;

		case 'house':
			$gold = rand(2,5);
			break;

		case 'casino':
			$odds = rand(0,1);
			$gold = rand(0,50);
			if ($odds == 0)
			{
				$gold *= -1;
			}
			break;

		default:
			$gold = 0;
			break;
	}

	if ($gold < 0)
	{
		$activity = ['You entered a casino and lost ' . $gold . ' gold(s). Ouch!', 'loss'];
	}
	else
	{
		$activity = ['You entered a ' . $building . ' and earned ' . $gold . ' gold(s)', 'win'];
	}
	// $activities = $this->session->userdata('activities');
	// array_unshift($activities, $activity);
	// $this->session->set_userdata('activities', $activity);
	$_SESSION['activities'] = $activity;

	$running_total = $_SESSION['gold'];
	$running_total += $gold;
	$_SESSION['gold'] = $running_total;
?>