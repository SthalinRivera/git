---
title: Controlador de Servos de 16 canales
description: Guía completa sobre el controlador de servos PCA9685 y su integración con Arduino.
---

# Controlador de Servos de 16 canales (PCA9685)

El **PCA9685** es un módulo controlador de servomotores que permite manejar hasta **16 servos** utilizando solo **dos pines I2C** de Arduino. Es ideal para proyectos que requieren múltiples grados de libertad, como un **brazo robótico**.

![Brazo Robótico](/src/assets/partes-de-controlador.jpg)


## 🔹 Características del PCA9685
- **16 canales PWM** con resolución de **12 bits** (4096 pasos).
- **Frecuencia de actualización programable** (hasta 1.6 kHz).
- **Interfaz I2C**, solo usa **dos pines de Arduino**.
- **Alimentación independiente** de hasta **6V** para los servos.
- **Dirección I2C configurable**, permite conectar múltiples módulos.

---

## 🛠️ Conexión del PCA9685 con Arduino


![Brazo Robótico](/src/assets/conexcion-arduino.jpg)

Para conectar el **PCA9685** con Arduino, sigue esta tabla:

| PCA9685 | Arduino Uno |
|---------|------------|
| VCC     | 5V         |
| GND     | GND        |
| SDA     | A4         |
| SCL     | A5         |
| V+      | 5-6V       |

**Nota:**  
- **VCC** alimenta la lógica del módulo (5V).  
- **V+** alimenta los servomotores (depende del voltaje de los servos, normalmente **5-6V**).  
- **SDA y SCL** son los pines I2C.

---

## 🔹 Instalación de la Biblioteca Adafruit PWM Servo Driver

Para programar el **PCA9685**, usaremos la biblioteca de **Adafruit**. Sigue estos pasos:

1. **Abrir Arduino IDE**.
2. Ir a **Gestor de Bibliotecas** (Ctrl + Shift + I).
3. Buscar **Adafruit PWM Servo Driver**.
4. Hacer clic en **Instalar**.

---

## 🔹 Código Base para Controlar un Servo

Este código mueve un **servo** conectado al **canal 0** del PCA9685 entre **dos posiciones (mínima y máxima)**.

```cpp
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

// Crear objeto para controlar los servos
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

// Definir los valores mínimos y máximos de pulso para el servo
#define SERVO_MIN 150   // Posición mínima
#define SERVO_MAX 600   // Posición máxima

void setup() {
  Serial.begin(9600);
  Serial.println("Iniciando PCA9685...");

  pwm.begin();
  pwm.setPWMFreq(50); // Frecuencia para servos (50 Hz)
}

void loop() {
  // Mover el servo a la posición mínima
  pwm.setPWM(0, 0, SERVO_MIN);
  Serial.println("Servo en posición mínima");
  delay(1000);

  // Mover el servo a la posición máxima
  pwm.setPWM(0, 0, SERVO_MAX);
  Serial.println("Servo en posición máxima");
  delay(1000);
}
