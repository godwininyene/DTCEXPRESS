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
            color: #ffffff;
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
    <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td align="center">
                <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                        <td class="email-masthead">
                            <a href="https://cdtexpress.com" class="f-fallback email-masthead_name">
                                <img src="{{ asset('logo.png') }}" alt="logo"
                                    style="height:100px">
                            </a>
                        </td>
                    </tr>
                    <!-- Email Body -->
                    <tr>
                        <td class="email-body" width="100%" cellpadding="0" cellspacing="0">
                            <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0"
                                role="presentation">
                                <!-- Body content -->
                                <tr>
                                    <td class="content-cell">
                                        <div class="f-fallback">
                                           
                                            <p><strong>Subject:</strong> Your Package from <strong> {{ $sender}}</strong> Has Been Received!</p>
                                            <h4>Dear {{ $receiver }},</h4>
                                                <p>
                                                    We are excited to inform you that we have received a package with your details as the receiver from <strong>{{ $sender}}</strong>.
                                                </p>
                                                <p>
                                                    <strong>Shipment Details:</strong>

                                                    <ul>
                                                        <li>
                                                            <strong>Tracking Number:</strong> {{$tracking_number}}
                                                        </li>
                                                        <li>
                                                            <strong>Sender:</strong> {{$sender}}
                                                        </li>
                                                        <li>
                                                            <strong>Estimated Delivery Date:</strong> {{$delivery_date}}
                                                        </li>
                                                    </ul>
                                                    You can track the status of your shipment using the tracking number provided above by visiting our <a href="https://cdtexpress.com/track">tracking page</a>.
                                                </p>

                                            <p>
                                                Best Regards, <br />
                                                <strong> CD & T Express logistics company!</strong>
                                            </p>

                                            <p>
                                                <small><i>This is an automated message, please do not reply.</i></small><br>
                                            </p>
                                            <!-- Action -->
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0"
                                role="presentation">
                                <tr>
                                    <td class="content-cell" align="center">
                                        <p class="f-fallback sub align-center">&copy; {{ date('Y') }} 
                                        CD & T Express logistics company. All rights reserved.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
