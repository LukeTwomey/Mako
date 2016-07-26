<!DOCTYPE html>

<html lang="en">
    <head>
        <?php include("head.php"); ?>
    </head>

    <body>
        <div id="fouc">
            <div class="site-wrap">
                <?php include("header.php"); ?>

                <div class="page-content sub contact"> 
                    <img src="images/contact-m.jpg"/>
                    <div class="sub-content">
                        <h1>Contact</h1>
                        
                        <form>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="text" name="email" placeholder="Email" />
                            <textarea name="message" placeholder="Message" rows="5"></textarea>
                            <input type="submit" value="Submit" />
                        </form>

                    </div>
                </div>

                <?php include("footer.php"); ?>
            </div>
        </div>

        <?php include("back-to-top.php"); ?>
        <?php include("javascript-files.php"); ?>
    </body>
</html>