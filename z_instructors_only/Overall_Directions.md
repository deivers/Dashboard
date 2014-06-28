Title: Instructions for Dashboard Quizzes
CSS:  deiBasicStyles.css

# Overall Instructions for Authoring Quizzes

As of January 2014, the following are the quiz types available:

* Short Answer (fill in the blank)
* Matchup (2 layout options)
* Multiple Choice
* Multiple Select
* Sequencer (vertical and horizontal layout options)
* Image Menu
* Image Short Answer

[The types of Quizzes]
| Type	| Question	| Answer	|  
|  ------	| ------	| ------	|  
| Short Answer	| text or image	| text with autocomplete
| Matchup (Lateral or Stacked)	| text or image	| text or image
| Multiple Choice/Select	| text or image	| text or image
| Sequencer (row or column)	| text or image	| text or image
| Image Menu	| image	| text (menu choice)
| Image Short Answer	| image	| text with autocomplete

Note: images can be used for answers and/or questions in all of the quiz types

When deployed on your website, the recommended folder structure is:

	_code folder
	Module1 folder
		Topic1 GLO folder
			html files (your course content)
			Dashboard.html
			quizpage1.html
			quizpage2.html
			LogResponse.php
			etc.
		Topic2 GLO folder
			html files
			quizpage1.html
				etc.
	Module2 folder
		etc.

You may find it helpful to begin all quiz filenames with "quiz-", for example "quiz-inheritance.html".

Key things to remember:

* Regarding quiz-pages in the same folder, each must have a different quizpageNumber defined in the script tag of the html file or in the compositionReady code of the Edge Animate project.
* The \_code folder must be exactly 2 levels above each quiz.
* When testing your pages in a browser, you must be connected to the internet.  In order for the logging to work, all files must be uploaded to a server and accessed there.
* If you want to change a style for all quizzes, edit the css file in the _code folder.  If you want the change to apply only to one quiz, edit the \<style\> section of the html file for that quiz.
	

See also the instructions for each type of quiz.

