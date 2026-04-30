const int POT_PINS[4] = {A0, A1, A2, A3};
int values[4];

void setup() {
  Serial.begin(9600);
}

void loop() {
  for (int i = 0; i < 4; i++) {
    values[i] = analogRead(POT_PINS[i]); // 0 ~ 1023
  }

  Serial.print(values[0]); Serial.print(",");
  Serial.print(values[1]); Serial.print(",");
  Serial.print(values[2]); Serial.print(",");
  Serial.println(values[3]);

  delay(30);
}
