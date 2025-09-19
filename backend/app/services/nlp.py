import pathway as pw
import os

PATHWAY_API_KEY = os.getenv("PATHWAY_API_KEY")

def analyze_documents(docs: list[str]):
    # Pathway pipeline
    tbl = pw.demo.dict_to_table({
        "doc": docs
    })

    # Simple NLP placeholder
    out = tbl.select(
        pw.this.doc,
        conflict=pw.apply(lambda x: "conflict found" if "10 PM" in x and "midnight" in x else "none", pw.this.doc)
    )

    return list(out)
