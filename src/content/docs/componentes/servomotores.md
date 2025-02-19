---
title: Servomotores
description: Guía sobre el uso y control de servomotores en un brazo robótico.
---

# Servomotores

Los **servomotores** son motores de precisión que permiten controlar el movimiento angular con alta exactitud. Se utilizan ampliamente en brazos robóticos, drones y automatización.

---


## 🔹 Tipos de Servomotores

### 🟢 Servomotores de Rotación Limitada
- Giran dentro de un **rango específico** (por ejemplo, 0° a 180°).
- Se controlan con **señales PWM**.

### 🔵 Servomotores de Rotación Continua
- No tienen límites de giro (como motores DC).
- Se controlan con señales PWM, ajustando la velocidad en lugar del ángulo.

---

## 🔹 Conexión de un Servomotor con Arduino

| Servomotor | Arduino |
|------------|---------|
| VCC (Rojo) | 5V      |
| GND (Negro) | GND   |
| Señal (Amarillo) | PWM (Ej: D9) |

---

## 🔹 Código Básico para Controlar un Servo

Este código mueve un **servo** entre 0° y 180°.

```cpp
#include <Servo.h>

Servo servoMotor;

void setup() {
  servoMotor.attach(9); // Pin PWM donde está conectado el servo
}

void loop() {
  servoMotor.write(0);  // Mover a 0 grados
  delay(1000);
  servoMotor.write(180); // Mover a 180 grados
  delay(1000);
}
