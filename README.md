[Angular]: https://angular.io/ "Angular UI Framework"
[Source]: https://github.com/rlexa/dd-flexbox "Source Code"

# ddFlexbox, ddFlexitem

DdFlexbox and ddFlexitem ([Source]) are [Angular] directives for `display: flex;` based layouting.

## Info

Handles setting of flex based style parameters on the target element. Useful for layouting done directly in templates and generally separating layouting from visuals which can stay in CSS. Both directives can be used on same element. Directive's parameters can be mixed together in any order (and can be separated by spaces) e.g. `ddFlexbox="vycw"` denotes a vbox (`flex-direction: column;`) with items centered horizontally and with auto-wrapping.

## HowTo: Example of flexible layout with top menu, sidebar and auto-wrapping data view

```html
<!-- main: vbox -->
<div ddFlexbox="v">
  <!-- menu: hbox with centered content -->
  <div ddFlexbox="xcyc">
    <button>Overview</button>
    <button>Projects</button>
    <button>Partner</button>
  </div>
  <!-- content: hbox -->
  <div ddFlexbox>
    <!-- sidebar: no grow or shrink in parent, itself a vbox with content to the right -->
    <div ddFlexitem="0 0" ddFlexbox="vye">
      <!-- label: position self left in parent -->
      <h3 ddFlexitem="as">Do:</h3>
      <button>Action 1</button>
      <button>Action 2</button>
      <button>Action 3</button>
    </div>
    <!-- data view: hbox which auto-wraps content -->
    <div ddFlexbox="w">
      <!-- data items: cards with different min width -->
      <div *ngFor="let card of [1,2,3,4,5,6,7,8,9,10]" ddFlexitem="0 0 {{ 1 + card%3 }}00px" ddFlexbox="v">
        <h4>Card {{card}}</h4>
        <label>Text Card Text Card Text Card</label>
      </div>
    </div>
  </div>
</div>
```

## API

### ddFlexbox

| CSS Targeted | Css Value | Parameter | Info |
| - | - | - | - |
| display | flex | - | default (auto-set) |
| flex-direction | row | `h` (default) | hbox |
| | column | `v` | vbox |
| flex-wrap | wrap | `w` | auto-wrap mode (default is 'no-wrap') |
| justify-content | flex-start | `xs` (default) | pack content at beginning of flex-direction |
| | center | `xc` | ... |
| | flex-end | `xe` | ... |
| | space-between | `xb` | ... |
| | space-around | `xa` | ... |
| align-items | flex-start | `ys` | pack content at beginning 90° to flex-direction |
| | center | `yc` | ... |
| | flex-end | `ye` | ... |
| | baseline | `yb` | ... |
| | stretch | `yt` (default) | ... |
| align-content | flex-start | `cs` | aligning lines when wrapped (yeah I know, see docs) |
| | center | `cc` | ... |
| | flex-end | `ce` | ... |
| | space-between | `cb` | ... |
| | space-around | `ca` | ... |
| | stretch | `ct` (default) | ... |

### ddFlexitem

| CSS Targeted | Css Value | Parameter |
| - | - | - |
| align-self | flex-start | `as` |
|  | center | `ac` |
|  | flex-end | `ae` |
|  | baseline | `ab` |
|  | stretch | `at` |
|  | auto | `aa` (default if empty) |
| flex | `<grow> <shrink> {size}` | `<grow> <shrink> {size}` (default is `0 1 auto`) |

## License

MIT
