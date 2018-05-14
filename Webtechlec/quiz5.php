<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Collapsible sidebar using Bootstrap 3</title>

        <!-- Bootstrap CSS CDN -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!-- Our Custom CSS -->
        <link rel="stylesheet" href="css/style2.css">
        <link rel="stylesheet" href="css/custom.css">
        <!-- Scrollbar Custom CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

    </head>
    <body>



        <div class="wrapper">
            <!-- Sidebar Holder -->
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Course Quiz</h3>
                </div>

                 <ul class="list-unstyled components">
                    <!-- <li class="active">
                        <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false">WWW</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu1">
                            <li><a href="#">Introduction</a></li>
                            <li><a href="#">Terminologies</a></li>
                            <li><a href="#">Summary</a></li>
                        </ul>
                    </li> -->
                    <li>
                        <a href="sswst.php">Server-Side Web Scripting Technologies</a>
                    </li>
                    <li>
                        <a href="phpquiz.php">PHP</a>
                    </li>
                    <li>
                        <a href="ssjwnj.php">Server-Side Javascript With Node JS</a>
                    </li>
                    <li>
                        <a href="sjspquiz.php">Java Web Servlet and JSP</a>
                    </li>
                    <li>
                        <a href="owaspquiz.php">OWASP Top 10: Web Security</a>
                    </li>
                </ul>

            </nav>

            <!-- Page Content Holder -->
            <div id="content">

                <nav class="navbar navbar-default">
                    <div class="container-fluid">

                        <div class="navbar-header">
                            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
                                <i class="glyphicon glyphicon-align-left"></i>
                                <span>Open Quiz</span>
                            </button>
                        </div>

                    </div>
                </nav>

            <!-- Quiz content here... -->
                <div class="container ">
                    <div class="row mt-3">
                        <div class="col-md-12 withBorder p-0">
                            <div class="quiz">
                                	<div class="row">
                                        <div class="col-sm-12">
                                            <div id="result" class="quiz-body">
                                            <form name="quizForm" onSubmit="">
                                                <fieldset class="form-group">
                                                <h4><span id="qid">1.</span> <span id="question"></span></h4>

                                                <div class="option-block-container" id="question-options">

                                                 </div> <!-- End of option block -->
                                                 </fieldset>
                                                 <button  name="previous" id="previous" class="btn btn-success">Previous</button>
                                                 &nbsp;
                                                 <button  name="next" id="next" class="btn btn-success">Next</button>
                                           </form>
                                           </div>
                                        </div> <!-- End of col-sm-12 -->

                                    </div> <!-- End of row -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <!-- jQuery CDN -->
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <!-- Bootstrap Js CDN -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>
         <script src="js/quiz5.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                $("#sidebar").mCustomScrollbar({
                    theme: "minimal"
                });

                $('#sidebarCollapse').on('click', function () {
                    $('#sidebar, #content').toggleClass('active');
                    $('.collapse.in').toggleClass('in');
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
                });
            });
        </script>
    </body>
</html>
