<?php
namespace DevoirApp\Views\Classes;

use Devoir\View;


class AppView extends View
{
	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::afterFrame()
	 */
	public function afterFrame(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::afterLayout()
	 */
	public function afterLayout(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::afterRender()
	 */
	public function afterRender(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::beforeFrame()
	 */
	public function beforeFrame(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::beforeLayout()
	 */
	public function beforeLayout(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::beforeRender()
	 */
	public function beforeRender(\Devoir\Interfaces\ViewEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::onInitialize()
	 */
	public function onInitialize(\Devoir\Interfaces\DevoirEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\View::onTerminate()
	 */
	public function onTerminate(\Devoir\Interfaces\DevoirEventInterface $event)
	{
		// TODO Auto-generated method stub
		
	}

	/**
	 * {@inheritDoc}
	 * @see \Devoir\Devoir::getAncestors()
	 */
	public function getAncestors($object_or_class = null): array
	{
		// TODO Auto-generated method stub
		return parent::getAncestors($object_or_class ?? static::class);
	}

	
}