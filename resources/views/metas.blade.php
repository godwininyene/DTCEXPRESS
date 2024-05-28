@php
    $url = Request::url(); 
    $urlParts = explode("/", $url);
    $total = count($urlParts);
    $currentPage = $urlParts[$total - 1];  
@endphp

@if ($currentPage == 'services')
    <title inertia>Services - CD & T Express logistics company</title>
    <meta name="description" content="Massive Wealth Trading is an international online forex and commodities broker." />
    <meta property="og:title"               content="Transit with CD & T Express logistics company; An international logistics solution company." />
    <meta property="og:description"        content="Learn more about CD & T Express logistics company. An international logistics solution company." />
    <meta property="og:url"                content="https://cdtexpress.com/services" />
@elseif ($currentPage == 'about')
    <title inertia>About Us - CD & T Express logistics company</title>
    <meta name="description" content="Learn more about CD & T Express logistics company. An international logistics solution company." />
    <meta property="og:title"              content="About Us - CD & T Express logistics company" />
    <meta property="og:description"        content="Learn more about CD & T Express logistics company. An international logistics solution company." />
    <meta property="og:url"                content="https://cdtexpress.com/about" />
@elseif ($currentPage == 'contact-us')
    <title inertia>Contact Us - CD & T Express logistics company</title>
    <meta name="description" content="Contact  CD & T Express logistics company to know more on our logistics solutions." />
    <meta property="og:title"              content="Contact Us -  CD & T Express logistics company" />
    <meta property="og:description"        content="Contact  CD & T Express logistics company to know more on our logistics solutions." />
    <meta property="og:url"                content="https://cdtexpress.com/contact-us" />
@elseif ($currentPage == 'track')
    <title inertia>Track Shipment - CD & T Express logistics company</title>
    <meta name="description" content="Track with your 15 character tracking number." />
    <meta property="og:title"              content="Track Shipment - CD & T Express logistics company" />
    <meta property="og:description"        content="Track with your 15 character tracking number." />
    <meta property="og:url"                content="https://cdtexpress.com/track" />
@else
    <title inertia>CD & T Express logistics company</title>
    <meta name="description" content="CD & T Express logistics company is the world's driving worldwide coordination supplier - we uphold industry and exchange the worldwide trade of merchandise through land, sea, and air transport." />
    <meta property="og:title"              content="CD & T Express logistics company; A courier logistics services company" />
    <meta property="og:description"        content="Transit with CD & T Express logistics company; An international logistics solution company." />
    <meta property="og:url"                content="https://cdtexpress.com/" />
@endif
<meta name="keywords" content="CD & T Express logistics company, International logistics services,  logistics solution, courier delivery, sea freight, Air Freight, Land Freight" />
<meta property="og:type"               content="website" />
<meta property="og:image"              content="https://cdtexpress.com/icon.png"/>
<meta name="author" content="CD & T Express logistics company Limited." />
<meta name="contact" content="support@cdtexpress.com" />
<meta name="copyright" content="Copyright (c)2024 CD & T Express logistics company Ltd. All Rights Reserved." />