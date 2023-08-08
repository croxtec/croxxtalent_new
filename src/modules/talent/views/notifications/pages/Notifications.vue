<template>
  <div id="notifications" class="my-4">
    <div class="notification-list">
      <div class="notifier unseen">
        <div class="d-flex">
          <span class="mr-4" style="background: #36a100; width: 5px; height: 5px"></span>
          <img
            data-v-679ece4d=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA3CAYAAACo29JGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbjSURBVHgB1ZpPjBNVHMd/M1tQA8aFy8IBKcJBPLg1UQ9Csl0OwkHDbuCAMdpy8GAkgT3pQbLd6EFPuyRy0mRbjYkmKiV6AA92SMBIMKH1QkzAnZULmxioZlED2dbf98287pvpTDtvZnZZP0mbdubNn+/8fu/3+733xqCVYt/n26ndGuRPjv8Nuh+JTYZhExlNqr3WoBXCoLTIz/LNmwWidp5Pyx+PmF40+Zg6H1Mlw7TSFJtc3OinI2ydkisoBdo2n6tEZsaiH16dpwTEF5evwEolPkWWVgQhsswiy3FF6otL3VL9cC1pFSqkiZ64fHmaDzlBD4S2Rea6oo4Vo4nLz2a56ezqWSsMtqIxMBY16PQX5wirrVzfikUxipuaPfeuTWGgzAHteL9G4ZZbu8JUelowWJxIyMbVNS4MNDnx58P6YIhbGtP/A2GAy7ulqmOMbjJdW0RyZnMn4PihJym3a3PPNhOnf6bm4j06uGcb1a/fpvmFuxQPI8tfHMlpvGuP519K/Wxw43qqTb8YKtC+tUg7XvlG/C7u30mTxWEae7dGjRt3KDYGp6na6xfUTT63NCbTcEdY5Jk3vqPyueuB+6sXb3Z+z7HQ7JaNVP/kZbb4bopNu1X2u+eyOMdqRYrBZOFpmn7r2a7tRz/8kaz6ra7tZy8ti1PdcebYc+Jc8TCyLMeTHhTLwWr64GZKxRydOPwUbR/a0LW/VPYGMrhkkOBOez5XfIHkKQ0dcTGtJoVJyu/s6WpzobEgBEms+oJnf+AD4XOeeS8v+q4mg6Kwd3EtZ46QJn5hIJ/bQiPDQ11tVXHVi7979hUP7KRgDHpMXxw5IxYHV5ye1YKESUoc+fzYt5b7ldrfkAaKB3b52i7S6MT3NH6yRvPKQ4kOR003sJjOD0wNRKOXMBBkPdnH1CiZZXdEAFGZ+eqaiLJBfVLPRc2D4pvLl8guiQvML/wtnqz6KZ+74Wnnt17l/A2RqFWXHOGHgBQA0A9xnonTV0Qa8YNIrOeibfH0M9SmXNRDcOGg3IUnPVVpiMSNG4b1CpycIUoyftLiSy2DBI/zIZqe+vpa6DXhKYjElfO/UfS5BmfcaUqVSZF9BVbEb1hPdSVsU/sQLJljF+wlrLD/iU4XCIqqPcjiy+CpA1T/qQhMi8EN6+j44d2evl384JLHE/piZrIZnXILrpbPDYk+AleMX+x2gyCEtAB3hWv7A4h2zmvd24RRQdTJU1FlI3TL8A2BUiiSdRxgpTPvj4p+2rNdjISeoQTghpybGu6UVbpW3b71Ue5/d/jmH2KrbQptJyOrDonE+S8Oi47tfZzyHFiiimtwYJngD4B14JZwUefBDVESIK5JGq4ZhKxAkMdmOPrFqyycVONY30ktACKHd26K45bJxMkcFZR400KKjUEz466wZEmTKKEZJZbdwz1n337BGaiyW6L0SjP6knW0jsLZjtp+znW3fsLQZ1CtFHxFsZ+pyi/C7VCBYCSOQjol6vgaoOzBrWy5sShH4Cmjf4VVFbDUNBfDM8eeF21hjV9v/tXZjxrx8rU/6N97S+K/dGcIfHj9AB3Zt4OPcyqRLZsf6ZRyYi7GMGjh9j8UjfZPZFe/NJyBqjlHCZAVBSwgO746CSS58+0R0X9QZ3aO5fZXP36pZ6iH22K0oIGYrDXZN23ScE0/qFrmvjgkSiU1op346IqnHVwV+5Eq1Hawnr+tiqxZtcDCJS3PoZRJE4Rn9CtMLfjDNKKoOigFagXi71toGxQRIQw5UzMa1+UylyuudZY0+fPu/VBXKgcEGzUhB+UszJSpSGExcuaM/OGI47DJPdYiDaS72L6Li9lj3zaIUS03tndb4PnkTBksFVNYxyXFz85Gg0qkSZDA5uL9rnZwYZWwiSRE4QQWY9qe9fNlcWIqWs96wC9QhnIVBBE/6Kv+AaicqW64taY25rqS569nZwzrAQjDTdVDbiqoAJZT6P7gkqCUK/nXy73ihPXaMxQD3BQs6BeIxB62IIK+WOWxXKI1Ageb89qUf2P34qPzJtBVcuchkiKHMRCvWsWOOXIIhKcUgt5yCF5ZHf1smGduLUo4FFolSkFWA8Erq84y7AN630QH7kIhwsBA6HF2tUHZcYz1DtCahMO+VXyzV4uBXjtZ4OW1KVAIO9qvldmvAZv9FPdMDImatDYoRREGor/75QyNeL08nSgagybfbZFqhch1sP5be/kKVmBLtKpw5WQOFHVfTYz3vqWzEjsZdw09OigHl6a4sLcoBsnelF0xkclEdc5CaeD0xxFHZFu+sK17K5Z4p5JaFXd2IDHpvcCtkp/Ns1hegWxnSQQg0ye2hcjLH4PHkS0UDHUWlHo0/g9TQPD6GvHBOAAAAABJRU5ErkJggg=="
            alt=""
            class="mr-3 img-fluid logo-list"
          />
          <div class="w-6">
            <p class="mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscinguet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </p>
          </div>
          <div class="w-2">
            <button class="btn">
              <svg
                width="6"
                height="25"
                viewBox="0 0 6 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.414062 12.7337C0.414062 13.5177 0.696699 14.2695 1.1998 14.8239C1.70289 15.3782 2.38524 15.6896 3.09672 15.6896C3.80821 15.6896 4.49055 15.3782 4.99365 14.8239C5.49674 14.2695 5.77938 13.5177 5.77938 12.7337C5.77938 11.9498 5.49674 11.1979 4.99365 10.6436C4.49055 10.0893 3.80821 9.77783 3.09672 9.77783C2.38524 9.77783 1.70289 10.0893 1.1998 10.6436C0.696699 11.1979 0.414062 11.9498 0.414062 12.7337ZM0.414062 3.86605C0.414062 4.65 0.696699 5.40184 1.1998 5.95618C1.70289 6.51052 2.38524 6.82194 3.09672 6.82194C3.80821 6.82194 4.49055 6.51052 4.99365 5.95618C5.49674 5.40184 5.77938 4.65 5.77938 3.86605C5.77938 3.0821 5.49674 2.33025 4.99365 1.77592C4.49055 1.22158 3.80821 0.910156 3.09672 0.910156C2.38524 0.910156 1.70289 1.22158 1.1998 1.77592C0.696699 2.33025 0.414062 3.0821 0.414062 3.86605ZM0.414062 21.6014C0.414062 22.3854 0.696699 23.1372 1.1998 23.6915C1.70289 24.2459 2.38524 24.5573 3.09672 24.5573C3.80821 24.5573 4.49055 24.2459 4.99365 23.6915C5.49674 23.1372 5.77938 22.3854 5.77938 21.6014C5.77938 20.8174 5.49674 20.0656 4.99365 19.5113C4.49055 18.9569 3.80821 18.6455 3.09672 18.6455C2.38524 18.6455 1.70289 18.9569 1.1998 19.5113C0.696699 20.0656 0.414062 20.8174 0.414062 21.6014Z"
                  fill="#0D0D0D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div style="padding-left: 30px" class="d-flex ml-6 py-2"><span>Now</span></div>
      </div>
      <div class="notifier seen">
        <div class="d-flex">
          <span class="mr-4" style="background: #36a100; width: 5px; height: 5px"></span>
          <img
            data-v-679ece4d=""
            src="data:image/png;base64,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"
            alt=""
            class="mr-3 img-fluid logo-list"
          />
          <div class="w-6">
            <p class="mr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscinguet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos
            </p>
          </div>
          <div class="w-2">
            <button class="btn">
              <svg
                width="6"
                height="25"
                viewBox="0 0 6 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.414062 12.7337C0.414062 13.5177 0.696699 14.2695 1.1998 14.8239C1.70289 15.3782 2.38524 15.6896 3.09672 15.6896C3.80821 15.6896 4.49055 15.3782 4.99365 14.8239C5.49674 14.2695 5.77938 13.5177 5.77938 12.7337C5.77938 11.9498 5.49674 11.1979 4.99365 10.6436C4.49055 10.0893 3.80821 9.77783 3.09672 9.77783C2.38524 9.77783 1.70289 10.0893 1.1998 10.6436C0.696699 11.1979 0.414062 11.9498 0.414062 12.7337ZM0.414062 3.86605C0.414062 4.65 0.696699 5.40184 1.1998 5.95618C1.70289 6.51052 2.38524 6.82194 3.09672 6.82194C3.80821 6.82194 4.49055 6.51052 4.99365 5.95618C5.49674 5.40184 5.77938 4.65 5.77938 3.86605C5.77938 3.0821 5.49674 2.33025 4.99365 1.77592C4.49055 1.22158 3.80821 0.910156 3.09672 0.910156C2.38524 0.910156 1.70289 1.22158 1.1998 1.77592C0.696699 2.33025 0.414062 3.0821 0.414062 3.86605ZM0.414062 21.6014C0.414062 22.3854 0.696699 23.1372 1.1998 23.6915C1.70289 24.2459 2.38524 24.5573 3.09672 24.5573C3.80821 24.5573 4.49055 24.2459 4.99365 23.6915C5.49674 23.1372 5.77938 22.3854 5.77938 21.6014C5.77938 20.8174 5.49674 20.0656 4.99365 19.5113C4.49055 18.9569 3.80821 18.6455 3.09672 18.6455C2.38524 18.6455 1.70289 18.9569 1.1998 19.5113C0.696699 20.0656 0.414062 20.8174 0.414062 21.6014Z"
                  fill="#0D0D0D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div style="padding-left: 30px" class="d-flex ml-6 pt-2"><span>Now</span></div>
      </div>
    </div>
  </div>
</template>

<style>
.notifiction-list {
  display: flex;
  flex-direction: column;
}
.notifier {
  border-radius: 8px 8px 0px 0px;
  padding: 16px 8px;
  width: 100%;
  border: 1px solid rgba(0, 64, 161, 0.2);
}
.notifier.unseen {
  background: #f5f5f5;
}
.notifier.seen {
  background: #fff;
}
</style>
