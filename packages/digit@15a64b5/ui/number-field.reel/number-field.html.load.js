montageDefine("15a64b5","ui/number-field.reel/number-field.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <link href=number-field.css rel=stylesheet>\n\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"numberField"},"_numberFieldTextFieldComponent":{"@":"textField"},"_numberFieldMinusComponent":{"@":"minus"},"_numberFieldPlusComponent":{"@":"plus"}}},"textField":{"prototype":"ui/text-field.reel","properties":{"element":{"#":"textField"}},"bindings":{"value":{"<->":"@owner.value"}}},"plus":{"prototype":"ui/button.reel","properties":{"element":{"#":"buttonPlus"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"minus":{"prototype":"ui/button.reel","properties":{"element":{"#":"buttonMinus"}},"listeners":[{"type":"action","listener":{"@":"owner"}}]}}</script>\n\n</head>\n<body>\n\n    <span data-montage-id=numberField class=digit-NumberField>\n        <button data-montage-id=buttonMinus class=digit-NumberField-minus tabindex=-1>-</button>\n        <input data-montage-id=textField class=digit-NumberField-input>\n        <button data-montage-id=buttonPlus class=digit-NumberField-plus tabindex=-1>+</button>\n    </span>\n    \n</body>\n</html>'});