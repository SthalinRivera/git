---
title: Arduino y su función
description: Explicación del papel de Arduino en el control del brazo robótico.
---

Arduino es la placa de control principal utilizada para enviar señales a los servomotores del brazo robótico. Su función es interpretar las órdenes de movimiento y convertirlas en señales PWM para los servomotores.

## Características clave:
- Compatible con múltiples sensores y módulos.
- Programable con el lenguaje C/C++ mediante el IDE de Arduino.
- Comunicación mediante puertos digitales y analógicos.

## Código de ejemplo:
```cpp
#include <Wire.h>
void setup() {
  Serial.begin(9600);
}
void loop() {
  Serial.println("Arduino conectado.");
  delay(1000);
}
