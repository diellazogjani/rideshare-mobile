CREATE TABLE IF NOT EXISTS preferimet (
    perdorues_id TEXT NOT NULL REFERENCES profilet(github_id) ON DELETE CASCADE,
    udhetim_id TEXT NOT NULL REFERENCES udhetimet(id) ON DELETE CASCADE,
    krijuar_me TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (perdorues_id, udhetim_id)
);
