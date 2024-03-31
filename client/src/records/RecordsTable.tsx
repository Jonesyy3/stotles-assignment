import { Table } from "antd";
import { ColumnType } from "antd/lib/table";
import React from "react";
import { ProcurementRecord } from "../api/Api";
import ProcurementRecordPreviewModal from "../modals/ProcurementRecordPreview";

type Props = {
  records: ProcurementRecord[];
};

function RecordsTable(props: Props) {
  const { records } = props;
  const [previewedRecord, setPreviewedRecord] = React.useState<
    ProcurementRecord | undefined
  >();

  const columns = React.useMemo<ColumnType<ProcurementRecord>[]>(() => {
    return [
      {
        title: "Published",
        render: (record: ProcurementRecord) =>
          new Date(record.publishDate).toLocaleDateString(),
      },
      {
        title: "Title",
        render: (record: ProcurementRecord) => {
          const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            setPreviewedRecord(record);
          };
          return (
            <a href="#" onClick={handleClick}>
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Buyer name",
        render: (record: ProcurementRecord) => record.buyer.name,
      },
      {
        title: "Value",
        render: (record: ProcurementRecord) => {
          return record.value && record.currency 
              ? `${record.value} ${record.currency}` 
              : 'N/a'
        }
      },
      {
        title: 'Stage',
        render: (record: ProcurementRecord) => {
          return record.stage === 'CONTRACT' 
              ? `Awarded on ${record.award_date}`
              : new Date(record.close_date) > new Date() || record.close_date === null
                    ? `Open until ${record.close_date}`
                    : 'Closed'
        }
      }
    ];
  }, []);
  return (
    <>
      <Table columns={columns} dataSource={records} pagination={false} />
      <ProcurementRecordPreviewModal
        record={previewedRecord}
        onClose={() => setPreviewedRecord(undefined)}
      />
    </>
  );
}

export default RecordsTable;
