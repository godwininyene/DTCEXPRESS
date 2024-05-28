<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ShipmentNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $body, $subject, $receiver, $sender, $delivery_date, $tracking_number;

    /**
     * Create a new message instance.
     */
    public function __construct( $sender, $receiver, $delivery_date, $tracking_number)
    {
        // $this->body = $body;
        // $this->subject = $subject;
        $this->sender = $sender;
        $this->receiver = $receiver;
        $this->delivery_date = $delivery_date;
        $this->tracking_number = $tracking_number;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject:  "Your Package from ".  $this->sender . " Has Been Received!",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.shipmentEmail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
