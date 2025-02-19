---
title: Calibración de Servos del Brazo Robótico
description: Guía rápida para la correcta calibración de los servomotores en un brazo robótico de 6 grados de libertad.
---

# 🛠️ Calibración de Servos del Brazo Robótico

La calibración de los servomotores es un paso fundamental para garantizar movimientos precisos y evitar esfuerzos innecesarios en la estructura del brazo robótico.

## 🔍 ¿Por qué calibrar los servos?

- Asegura que los servos comiencen desde una posición neutral.
- Evita bloqueos o esfuerzos innecesarios.
- Permite un control preciso de los movimientos.

## 📌 Materiales Necesarios

- **Brazo robótico de 6DOF** con servos instalados.
- **Fuente de alimentación adecuada** (5V - 6V, mínimo 2A).
- **Arduino + Módulo PCA9685** (si se usa controlador PWM).
- **Software Arduino IDE** para programar la calibración.

## 🔧 Procedimiento de Calibración

### 1️⃣ Definir el Rango de Movimiento

Cada servomotor tiene un rango de 0° a 180°, pero los valores de pulso pueden variar. Generalmente:

- **Posición 0°**: 500 - 700 µs
- **Posición 90°**: 1500 µs
- **Posición 180°**: 2300 - 2500 µs

Se recomienda probar cada servo individualmente para ajustar estos valores.

### 2️⃣ Código de Prueba para Calibración

Sube el siguiente código a tu Arduino para mover un servo entre 0°, 90° y 180°:

```cpp
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver servos = Adafruit_PWMServoDriver(0x40);

#define SERVO_PIN 0  // Cambiar según el servo a calibrar

void setup() {
  servos.begin();
  servos.setPWMFreq(60);
}

void loop() {
  servos.setPWM(SERVO_PIN, 0, 150);  // Posición 0°
  delay(1000);
  servos.setPWM(SERVO_PIN, 0, 375);  // Posición 90°
  delay(1000);
  servos.setPWM(SERVO_PIN, 0, 600);  // Posición 180°
  delay(1000);
}
```

### 3️⃣ Ajuste de Posiciones
Si el servo no alcanza el ángulo esperado, ajusta los valores de PWM.
Si el servo se mueve más de lo debido, reduce los valores de pulso.
Marca la posición neutral (90°) en cada servo antes de ensamblar el brazo.
### 4️⃣ Guardar la Configuración
Una vez calibrados los servos, anota los valores exactos y configúralos en el código final del brazo robótico.

