import {QuestionMatrixDropdownModelBase,
    MatrixDropdownRowModelBase,
    IMatrixDropdownData
} from "../question_matrixdropdownbase";
import {JsonObject} from "../jsonobject";
import {ItemValue} from "../base";
import {QuestionFactory} from "../questionfactory";

export class ObjectiveMatrixDropdownRowModel extends MatrixDropdownRowModelBase {
    constructor(public name: any, public text: string, data: IMatrixDropdownData, value: any) {
        super(data, value);
    }
    public get rowName() { return this.name; }
}
export class QuestionObjectiveMatrixDropdownModel extends QuestionMatrixDropdownModelBase implements IMatrixDropdownData {
    private rowsValue: ItemValue[] = [];

    constructor(public name: string) {
        super(name);
    }
    public getType(): string {
        return "objective";
    }
    public get rows(): Array<any> { return this.rowsValue; }
    public set rows(newValue: Array<any>) {
        ItemValue.setData(this.rowsValue, newValue);
    }
    protected generateRows(): Array<ObjectiveMatrixDropdownRowModel> {
        var result = new Array<ObjectiveMatrixDropdownRowModel>();
        if (!this.rows || this.rows.length === 0) return result;
        var val = this.value;
        if (!val) val = {};
        for (var i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].value) continue;
            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
        }
        return result;
    }
    protected createMatrixRow(name: any, text: string, value: any): ObjectiveMatrixDropdownRowModel {
        return new ObjectiveMatrixDropdownRowModel(name, text, this, value);
    }
}

JsonObject.metaData.addClass("objective", [{ name: "rows:itemvalues", onGetValue: function (obj: any) { return ItemValue.getData(obj.rows); }, onSetValue: function (obj: any, value: any) { obj.rows = value; }}],
    function () { return new QuestionObjectiveMatrixDropdownModel(""); }, "objective");

QuestionFactory.Instance.registerQuestion("objective", (name) => { var q = new QuestionObjectiveMatrixDropdownModel(name); q.choices = [1, 2, 3, 4, 5]; q.rows = ["Row 1", "Row 2"]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });