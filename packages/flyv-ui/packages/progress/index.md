## Progress 进度

### 使用指南
``` javascript
import { Progress } from 'flyv';

Vue.use(Progress);
```

### 代码演示

#### 基础用法

```html
<flyv-progress :progressBtnWidth="12" :percent="1"/>
```

### API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| progressBtnWidth | 进度条圆点直径 | `Number` | - | - |
| percent | 进度条进度，范围是0 - 1| `Number` | - | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| percentChange | 进度条进度改变时触发，获取对应进度值 | percent: Number |