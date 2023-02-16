<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Quran Vue</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ mix('css/app.css')}}" type="text/css">
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
</head>

<body>
    <div id="app"></div>
    
    <footer class="fixed-bottom" style="border-top: 5px solid lime; background-color: #f8f9fa;">
        <div class="container py-3">
            <div class="row">
                <div class="col-sm-6">
                    <p>Built with ❤️ for u 2023</p>
                </div>
                <div class="col-sm-6 text-right">
                    <p>"Boleh melek teknologi. Tapi, jangan lupa ngaji, sedikit juga tak masalah asal tiap hari"</p>
                    <a href="#" id="scroll-up" class="btn btn-success btn-lg scrollup" style="display: none; position: fixed; bottom: 20px; right: 20px;">↑</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>
<script>
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll-up').fadeIn();
            } else {
                $('#scroll-up').fadeOut();
            }
        });
        $('#scroll-up').click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
</script>