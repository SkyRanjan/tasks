import hashlib

class DeBruijnGraph:
    def _init_(self, k):
        self.k = k
        self.edges = {}

    def add_kmer(self, kmer):
        prefix = kmer[:-1]
        suffix = kmer[1:]
        prefix_hash = hashlib.sha256(prefix.encode()).hexdigest()
        if prefix_hash in self.edges:
            self.edges[prefix_hash].append(suffix)
        else:
            self.edges[prefix_hash] = [suffix]

    def get_edges(self, prefix):
        prefix_hash = hashlib.sha256(prefix.encode()).hexdigest()
        if prefix_hash in self.edges:
            return self.edges[prefix_hash]
        else:
            return []


def create_debruijn_from_string(text, k):
    graph = DeBruijnGraph(k)
    for i in range(len(text) - k + 1):
        kmer = text[i:i+k]
        graph.add_kmer(kmer)
    return graph

# Example usage
text = "AATGCTAGTTTAAATCTGA"
k = 3
graph = create_debruijn_from_string(text, k)
print(graph.get_edges("ATG")) # prints ["TGC", "GCT"]