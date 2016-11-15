var getValue, isCheckbox, isMultiChoice, toggleValue;

isCheckbox = function(el) {
    return el.getAttribute('type') === 'checkbox';
};

isMultiChoice = function(checkbox) {
    return checkbox.getAttribute('value') != null;
};

toggleValue = function(arr, val) {
    var valueIndex;
    valueIndex = arr.indexOf(val);
    if (valueIndex !== -1) {
        arr.splice(valueIndex, 1);
    } else {
        arr.push(val);
    }
    return arr;
};

getValue = function(el, currentValue) {
    if (!isCheckbox(el)) {
        return el.value;
    } else {
        if (isMultiChoice(el)) {
            if (currentValue == null) {
                currentValue = [];
            }
            return toggleValue(currentValue, el.value);
        } else {
            return el.checked;
        }
    }
};

const formData = {
    componentWillMount: function () {
        if (this.getInitialFormData != null) {
            return this.formData = this.getInitialFormData();
        } else {
            return this.formData = {};
        }
    },

    updateFormData: function (e) {
        var t = e.target,
            key = t.getAttribute('name');
        if (key != null) {
            var newValue = getValue(t, this.formData[key]);
            this.formData[key] = newValue;
        }
    }
}

export default formData;