---
title: Librería PCA9685 para Arduino
description: Librería PCA9685 para Arduino
---


Usaremos la librería de **Adafruit** para el controlador **PCA9685**.  
Puedes descargarla desde el siguiente enlace:  
🔗 [Adafruit PWM Servo Driver Library](https://github.com/adafruit/Adafruit-PWM-Servo-Driver-Library)

Después de descargarla, es necesario **importarla** en el IDE de Arduino.

---

## 🔹 Uso de la Librería

### 📌 Incluir las Librerías y Declarar el Objeto

Como cualquier librería, inicialmente se incluyen las librerías necesarias y se declara un objeto para el controlador:

```cpp
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver servos = Adafruit_PWMServoDriver(dirección);
 ```

###  📌 Dirección del PCA9685
Si no se ha modificado la dirección en la placa, esta será 0x40 por defecto.
Para cambiar la dirección, se deben soldar los puentes de la placa. La dirección final se determina por:

```cpp
Dirección = 0 | 1 | A5 | A4 | A3 | A2 | A1 | A0
```

La dirección si no han modificado en su placa del módulo PCA9685 es 0x40, si desean modificar la dirección, necesitan soldar los puentes de la placa, y queda establecida por: Dirección=0|1|A5|A4|A3|A2|A1|A0, por ejemplo si no sueldan ningún puente seria 01000000=0x40, si sueldan el segundo puente seria: 01000100=0x44

El siguiente paso es inicializar el objeto creado anteriormente.

```cpp
servos.begin();  
```

Posteriormente configurar la frecuencia del PWM, que será la misma para los 16 canales PWM


```cpp
servos.setPWMFreq(60); 

```
La frecuencia que usamos es de 60Hz que equivale una señal PWM con periodo 16,6ms que se encuentra dentro del rango del ciclo de trabajo de la mayoría de los servos

Para establecer el ancho de pulso de una salida PWM usamos la siguiente función
```cpp
 servos.setPWM(n_servo, up, down);  
```

En este caso n_servo es el número de servo o salida que van a configurar (valor entre 0 y 15), up es el valor de cuentas en el que se producirá el flanco de subida, y down el valor para el flanco de bajada, ambos valores deben estar entre el valor de 0 y 4096 (12bits). El ancho de pulso será la resta de down-up.



