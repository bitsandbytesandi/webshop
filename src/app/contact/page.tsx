"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier komt later een echte form handler of email service
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Bedankt voor je bericht!</h1>
        <p className="text-muted-foreground mb-8">
          Ik neem zo snel mogelijk contact met je op.
        </p>
        <Button onClick={() => setSubmitted(false)}>Nog een bericht sturen</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Laten we praten
          </h1>
          <p className="text-muted-foreground">
            Heb je een vraag over dit project of wil je zelf een webshop laten bouwen?
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stuur een bericht</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Naam</Label>
                <Input id="name" placeholder="Jouw naam" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="jouw@email.nl" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea
                  id="message"
                  placeholder="Vertel me waar je mee geholpen wilt worden..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Bericht versturen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
