<!DOCTYPE html>
<html>
<head>
    <title>Your Package from {{$sender}} Has Been Received</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #dddddd;
        }
        .header{
            padding: 25px 0;
            background-color: #333333 !important;
        }
        .header{
            padding: 25px 0;
            background-color: #333333 !important;
        }
        .header, .footer {
            text-align: center;
        }
        .content {
            margin: 20px 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff !important;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer p {
            font-size: 12px;
            color: #666666;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="https://cdtexpress.com" class="f-fallback email-masthead_name">
                <img src="{{ asset('logo.png') }}" alt="logo"style="height:100px">
            </a>
        </div>
        <div class="content">
            <p>Dear {{$receiver}},</p>
            <p>We are writing to inform you that we have received a package addressed to you from {{$sender}}.</p>
            <p><strong>Shipment Details:</strong></p>
            <p><strong>Tracking ID:</strong> {{$tracking_number}}</p>
            <p><strong>Sender:</strong> {{$sender}}</p>
            <p><strong>Estimated Delivery Date:</strong> {{$delivery_date}}</p>
            <p>You can check the status of your package using the tracking ID provided above by visiting our <a href="https://cdtexpress.com/track" class="button">Tracking Page</a>.</p>
            <p>We are processing your shipment and it will be delivered to your address soon.</p>
            <p>If you have any questions or need further assistance, please contact our customer service team at support@cdtexpress.com.</p>
            <p>Thank you for choosing our services. We look forward to delivering your package promptly.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br>CD & T Express logistics company!<br>support@cdtexpress.com<br>https://cdtexpress.com<br>371 7th Ave, New York, NY 10001</p>
            <p><a href="https://cdtexpress.com/unsubscribe">Unsubscribe</a></p>
        </div>
    </div>
</body>
</html>
