<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <title>Course Notes</title>

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
                    <h3>Course Notes</h3>
                </div>

              <ul class="list-unstyled components" type="radio">
                    <li class="active">
                        <a href="#homeSubmenu1" data-toggle="collapse" aria-expanded="false"> Other Server-Side Web Scripting Technologies</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu1">
                            <li><a href="server-side.php">Introduction</a></li>
                            <li><a href="">Terminologies</a></li>
                            <li><a href="">Summary</a></li>
                        </ul>
                    </li>
                    <li class="active">
                        <a href="#homeSubmenu2" data-toggle="collapse" aria-expanded="false">PHP</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu2">
                            <li><a href="php.php">Introduction</a></li>
                            <li><a href="#">Terminologies</a></li>
                            <li><a href="#">Summary</a></li>
                        </ul>
                    </li>
                    <li class="active">
                        <a href="#homeSubmenu3" data-toggle="collapse" aria-expanded="false">Server-Side Javascript With Node JS</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu3">
                            <li><a href="server-side-nodejs.php">Introduction</a></li>
                            <li><a href="#">Terminologies</a></li>
                            <li><a href="#">Summary</a></li>
                        </ul>
                    </li>
                    <li class="active">
                        <a href="#homeSubmenu4" data-toggle="collapse" aria-expanded="false">Java Web Servlet and JSP</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu4">
                            <li><a href="servletjsp.php">Introduction</a></li>
                            <li><a href="#">Terminologies</a></li>
                            <li><a href="#">Summary</a></li>
                        </ul>
                    </li>
                    <li class="active">
                        <a href="#homeSubmenu5" data-toggle="collapse" aria-expanded="false">OWASP Top 10: Web Security</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu5">
                            <li><a href="owasp.php">Introduction</a></li>
                            <li><a href="#">Terminologies</a></li>
                            <li><a href="#">Summary</a></li>
                        </ul>
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
                                <span>Open Notes</span>
                            </button>
                        </div>

                    </div>
                </nav>

            <!-- Course content here... -->
                <div class="container ">
                <?php
                    $url = 'php.json';
                    $data = file_get_contents($url);
                    $courses = json_decode($data);
                    $counter = 1;
                ?>
                <?php foreach ($courses as $course) : ?>
                    <?php
                    $title = $course->title;
                    $description1 = $course->description1;
                    $description2 = $course->description2;
                    $description3 = $course->description3;
                    $description4 = $course->description4;
                    $imageurl = $course->imageurl;
                    ?>
                    <div class="row mt-3">
                        <div class="col-md-12 withBorder pt-3">
                            <div class="quiz">
                                <h1><?php echo strtoupper($title); ?></h1>
                                <p><?php echo $description1; ?></p>
                                <p><?php echo $description2; ?></p>
                                <p><?php echo $description3; ?></p>
                                <p><?php echo $description4; ?></p>
                                <img src="<?php echo $imageurl; ?>">
                            </div>
                        </div>
                    </div>
    
                    <br>
                <?php $counter++; endforeach; ?>
                </div>

            </div>
        </div>





        <!-- jQuery CDN -->
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <!-- Bootstrap Js CDN -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!-- jQuery Custom Scroller CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>

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
