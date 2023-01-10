### You are developing a clock app that displays an image of the sun when the time is 6 AM until 6 PM, and an image of the moon for the other hours. Your component code is written as follows:

```
function CurrentImage() { 
    const time = new Date().getHours(); 
    return ( 
        {hour >= 6 && hour <= 18 
            ? <Daytime /> 
              : <Nighttime /> 
          } 
```

### Based on this code, what will be returned if the `getHours` function produces a value of 14?

- [x] Daytime.
- [ ] Night-time.
